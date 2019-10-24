const express = require('express');
const db = require('../Db')
const mysql = require('mysql')

const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1> Hello in Router </h1>");
});

router.post('/newtask1', (req, res) => {
    res.status(200).send({ "msg": "success" });
    console.log(req.body);
    var comarr;

})


router.post('/newtask2', (req, res) => {
    res.status(200).send({ "msg": "success" });
    console.log(req.body);


    db.query('SELECT * from tasks WHERE date_creation > 1562342309 ORDER BY `id` DESC', function (err, rows, fds) {
        if (err) throw err;
        //console.log(res);
        rows.forEach((row, index) => {
            currid = row.id;
            newid = currid + 1;
            console.log(currid + '--' + newid);
            newdesc = req.body.desc.split('\n').join('\r\n');

            var insval = {
                id: newid,
                title: req.body.title,
                description: newdesc,
                date_creation: row.date_creation,
                date_due: row.date_due,
                color_id: row.color_id,
                position: row.position,
                column_id: row.column_id,
                owner_id: row.owner_id,
                project_id: 1,
                swimlane_id: 1,
                is_active: 1,
                reference: "",
                score: 0,
                creator_id: row.creator_id,
                date_modification: row.date_modification,
                date_started: row.date_started,
                date_moved: row.date_moved,
                priority: 1
            }
            var q = db.query('UPDATE tasks SET ? WHERE id = ?', [insval, 5], function (error, results, fields) {
                if (error) throw error;
                //console.log(q.sql);
            });

            commval = {
                task_id: newid,
                user_id: 1,
                reference: ""
            }
            var q = db.query('UPDATE comments SET ? WHERE task_id = ?', [commval, 5], function (error, results, fields) {
                if (error) throw error;
                //console.log(q.sql);
            });

            db.query('SELECT * FROM project_activities WHERE task_id = ? AND event_name = ?', [5, 'task.create'],
                function (err, row, fds) {
                    if (err) throw err;

                    row[0].data = "";
                    projval = {
                        creator_id: 1,
                        project_id: 1,
                        task_id: newid,
                        data: ""
                    }
                    var q = db.query('UPDATE comments SET ? WHERE task_id = ?', [projval, 5], function (error, results, fields) {
                        if (error) throw error;
                        //console.log(q.sql);
                    });
                })


        });
    })
});

router.post('/newtask', (req, res) => {
    res.status(200).send({ "msg": "success" });
    //console.log(req.body);
    updateprojact(req.body.cdate);
    setTimeout(updatetask, 4000, req.body.cdate);
    setTimeout(insnewtask, 4000, req.body);
});


function updateprojact(date) {
    var sql = 'SELECT `id`, `creator_id`, `project_id`, `task_id` FROM project_activities WHERE date_creation > ? ORDER BY id DESC';

    db.query(sql, [date], function (err, rows, fds) {
        if (err) {
            console.log('in 1....');
            throw err;
        }
        //console.log(rows);
        rows.forEach((row, index) => {
            currid = row.id;
            newid = currid + 1;

            updateval = {
                id: newid,
                creator_id: row.creator_id,
                project_id: row.project_id,
                task_id: row.task_id

            }
            var q1 = db.query('UPDATE project_activities SET ? WHERE id = ?', [updateval, currid], function (err, res, fds) {
                console.log(q1.sql);
                if (err) updateqerr(q1.sql);
            })
        });
    });

}

function updatetask(date) {
    var sql = 'SELECT `id`, `column_id`, `project_id`, `swimlane_id` FROM tasks WHERE date_creation > ? ORDER BY id DESC';

    db.query(sql, [date], function (err, rows, fds) {
        if (err) {
            console.log('in 2....');
            throw err;
        }
        //console.log(rows);
        for (i = 0; i < rows.length; i++) {
            currid = rows[i].id;
            newid = currid + 1;

            updateval = {
                id: newid,
                column_id: rows[i].column_id,
                project_id: rows[i].project_id,
                swimlane_id: rows[i].swimlane_id

            }
            //console.log(updateval);
            changeprojacttask(updateval, currid);

        }
    });

}


function updateqerr(sql) {
    var fq = db.query(sql, function (err, res, fds) {
        console.log('Hi');
        if (err) updateqerr(fq.sql);
    })
}



function changeprojacttask(val, id) {
    var cq = db.query('SELECT * FROM project_activities WHERE task_id=?', [id], function (err, rows, fds) {
        if (err) {
            console.log('in 3....');
            throw err;
        }
        rows.forEach((row, index) => {

            if (row.event_name == "task.create") {
                console.log(row);
                newdata = JSON.parse(row.data);
                newdata.task_id = row.task_id + 1;
                newdata.task.id = row.task_id + 1;
                //console.log(JSON.stringify(newdata));
                newval = {
                    creator_id: row.creator_id,
                    project_id: row.project_id,
                    task_id: row.task_id,
                    data: JSON.stringify(newdata)
                }
            }

            else if (row.event_name == "task.move.column") {
                console.log(row);
                newdata = JSON.parse(row.data);
                newdata.task_id = row.task_id + 1;
                newdata.task.id = row.task_id + 1;
                //console.log(JSON.stringify(newdata));
                newval = {
                    creator_id: row.creator_id,
                    project_id: row.project_id,
                    task_id: row.task_id,
                    data: JSON.stringify(newdata)
                }
            }

            else if (row.event_name == "task.file.create") {
                console.log(row);
                newdata = JSON.parse(row.data);
                newdata.file.task_id = row.task_id + 1;
                newdata.task.id = row.task_id + 1;
                //console.log(JSON.stringify(newdata));
                newval = {
                    creator_id: row.creator_id,
                    project_id: row.project_id,
                    task_id: row.task_id,
                    data: JSON.stringify(newdata)
                }
            }

            else if (row.event_name == "comment.create") {
                console.log(row);
                newdata = JSON.parse(row.data);
                newdata.comment.task_id = row.task_id + 1;
                newdata.task.id = row.task_id + 1;
                //console.log(JSON.stringify(newdata));
                newval = {
                    creator_id: row.creator_id,
                    project_id: row.project_id,
                    task_id: row.task_id,
                    data: JSON.stringify(newdata)
                }
            }

            else if (row.event_name == "task.move.position") {
                console.log(row);
                newdata = JSON.parse(row.data);
                newdata.task_id = row.task_id + 1;
                newdata.task.id = row.task_id + 1;
                //console.log(JSON.stringify(newdata));
                newval = {
                    creator_id: row.creator_id,
                    project_id: row.project_id,
                    task_id: row.task_id,
                    data: JSON.stringify(newdata)
                }
            }

            else if (row.event_name == "subtask.update") {
                console.log(row);
                newdata = JSON.parse(row.data);
                newdata.subtask.task_id = row.task_id + 1;
                newdata.task.id = row.task_id + 1;
                //console.log(JSON.stringify(newdata));
                newval = {
                    creator_id: row.creator_id,
                    project_id: row.project_id,
                    task_id: row.task_id,
                    data: JSON.stringify(newdata)
                }
            }

            else if (row.event_name == "task.update") {
                console.log(row);
                newdata = JSON.parse(row.data);
                newdata.task_id = row.task_id + 1;
                newdata.task.id = row.task_id + 1;
                //console.log(JSON.stringify(newdata));
                newval = {
                    creator_id: row.creator_id,
                    project_id: row.project_id,
                    task_id: row.task_id,
                    data: JSON.stringify(newdata)
                }
            }

            else if (row.event_name == "subtask.create") {
                console.log(row);
                newdata = JSON.parse(row.data);
                newdata.subtask.task_id = row.task_id + 1;
                newdata.task.id = row.task_id + 1;
                //console.log(JSON.stringify(newdata));
                newval = {
                    creator_id: row.creator_id,
                    project_id: row.project_id,
                    task_id: row.task_id,
                    data: JSON.stringify(newdata)
                }
            }

            else {
                console.log(row.event_name);
                return;
            }

            db.query('UPDATE project_activities SET ? WHERE id = ?', [newval, row.id], function (err, r, f) {
                if (err) {
                    console.log('in 4....');
                    throw err;
                }

            });

        });

        var q1 = db.query('UPDATE tasks SET ? WHERE id = ?', [val, currid], function (err, res, fds) {
            console.log(q1.sql);
            if (err) updateqerr(q1.sql);

        });


    });
}

function insnewtask(data) {
    newdesc = data.desc.split('\n').join('\r\n');
    newcol = +data.colrad;
    newcol = newcol + 0;
    newto = +data.torad;
    newto = newto + 0;

    var sql = "SELECT COUNT(*) AS count FROM `tasks` WHERE `column_id` = ?";
    var inserts = [newcol];


    sql = mysql.format(sql, inserts);
    //console.log(sql);
    db.query(sql, function (err, res, fds) {
        if (err) {
            console.log('in 5....');
            throw err;
        }
        let color, owner;
        let pos = res[0].count + 1;
        if (newto == 4) {
            color = "blue";
            auname = "rittika.parmar";
            aname = "Rittika Parmar";
            cuname = "rittika.parmar";
            cname = "Rittika Parmar";
        }
        if (newto == 5) {
            color = "yellow";
            auname = "urmila.chavan";
            aname = "Urmila Chavan";
            cuname = "urmila.chavan";
            cname = "Urmila Chavan";
        }

        if (newcol == 1) colname = "Backlog";
        if (newcol == 2) colname = "Ready";
        if (newcol == 3) colname = "Work In Progress";
        if (newcol == 4) colname = "Done";

        db.query('SELECT id FROM tasks WHERE date_creation > ?', [data.cdate], function (err, res, fds) {
            if (err) {
                console.log('in 6....');
                throw err;
            }
            priid = res[0].id - 1;
            var insval = {
                id: priid,
                title: data.title,
                description: newdesc,
                date_creation: data.cdate,
                date_due: data.edate,
                color_id: color,
                position: pos,
                column_id: newcol,
                owner_id: newto,
                project_id: 1,
                swimlane_id: 1,
                is_active: 1,
                reference: "",
                score: 0,
                creator_id: newto,
                date_modification: data.cdate,
                date_started: data.sdate,
                date_moved: data.cdate,
                priority: 1
            }
            db.query('INSERT INTO tasks SET ?', insval, function (err, results, fields) {
                if (err) {
                    console.log('in 7....');
                    console.log(insval);
                    throw err;
                }
                lasttask = results.insertId;

                var sql1 = "SELECT * from tasks WHERE id=?";
                db.query(sql1, priid, function (err, res, fds) {
                    if (err) {
                        console.log('in 8....');
                        throw err;
                    }

                    var catarr = {
                        category_name: null,
                        swimlane_name: "Default swimlane",
                        project_name: "DesiTokrey",
                        column_title: colname,
                        assignee_username: auname,
                        assignee_name: aname,
                        creator_username: cuname,
                        creator_name: cname,
                        category_description: null,
                        column_position: newcol
                    };

                    Object.keys(res[0]).forEach(function (key) {
                        if (res[0][key] != null && !isNaN(res[0][key])) res[0][key] = res[0][key].toString();

                    });

                    Object.keys(catarr).forEach(function (key) {
                        if (catarr[key] != null && !isNaN(catarr[key])) catarr[key] = catarr[key].toString();

                    });

                    arr = (Object.assign(res[0], catarr));
                    comarr = {
                        task_id: priid,
                        task: arr
                    }
                    //console.log(JSON.stringify(comarr));
                    //comarr = this.comarr;

                    //console.log(proact);

                    db.query('SELECT id FROM project_activities WHERE date_creation > ?', [data.cdate], function (err, res, fds) {
                        if (err) {
                            console.log('in 9....');
                            throw err;
                        }
                        pid = res[0].id - 1;
                        proact = {
                            id: pid,
                            date_creation: data.cdate,
                            event_name: "task.create",
                            creator_id: 1,
                            project_id: 1,
                            task_id: priid,
                            data: JSON.stringify(comarr)
                        }

                        var q = db.query('INSERT INTO project_activities SET ?', proact, function (err, res, fds) {
                            console.log(q.sql);
                            if (err) {
                                console.log('in 10....');
                                throw err;
                            }

                        });
                    })
                });
            });
        });
    });
}

module.exports = router;