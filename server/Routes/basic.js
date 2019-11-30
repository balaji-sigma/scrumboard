const express = require('express');
const db = require('../Db')
const mysql = require('mysql')

const router = express.Router();

let i = 0;

router.get('/', (req, res) => {
    res.send("<h1> Hello in Router </h1>");
});

router.post('/movetask', (req, res) => {

    res.status(200).send({ "msg": "move task success" });
    console.log(req.body);
    updateprojact(req.body.mdate);
    updatemovtask(req.body);
    insmovprojact(req.body);
    updatetrans(req.body);

    setTimeout(instranstion, 8000, req.body);
})

function updatetrans(data) {
    let newrid;
    var tsql = "SELECT id FROM transitions WHERE date > ? ORDER BY id DESC";
    var trsql = db.query(tsql, [data.mdate], function (err, rows, fds) {
        if (err) {
            console.log(trsql.sql);
            throw err;
        }
        rows.forEach((row, index) => {
            newrid = row.id + 1;
            var tsql1 = "UPDATE transitions SET id=? WHERE id=?";
            var trsql1 = db.query(tsql1, [newrid, row.id], function (err, res, fds) {
                if (err) {
                    console.log(trsql1.sql);
                    //throw err;
                    updateqerr(trsql1.sql);
                }
            });
        });
    });
}

function instranstion(data) {

    var isql = "SELECT id FROM transitions WHERE date > ? LIMIT 1";
    let irsql = db.query(isql, [data.mdate], function (err, res, fds) {
        if (err) {
            console.log(irsql.sql);
            throw err;
        }
        console.log(irsql.sql);
        let insid;
        insid = res[0].id - 1;
        var tsql2 = "SELECT time_spent FROM transitions WHERE task_id = ? AND date < ?";
        var trsql2 = db.query(tsql2, [data.taskid, data.mdate], function (err, rows, fds) {
            if (err) {
                console.log(trsql2.sql);
                throw err;
            }
            let ttime = 0;
            rows.forEach((row, index) => {
                ttime += row.time_spent;
            })
            console.log(ttime);

            var tsql3 = "SELECT date_creation FROM tasks WHERE id = ?";
            var trsql3 = db.query(tsql3, [data.taskid], function (err, res, fds) {
                if (err) {
                    console.log(trsql3.sql);
                    throw err;
                }

                let newdate = data.mdate - res[0].date_creation - ttime;

                var tsql4 = 'INSERT transitions SET ?';
                let trarr = {
                    id: insid,
                    user_id: data.movby,
                    task_id: data.taskid,
                    project_id: 1,
                    src_column_id: data.srcid,
                    dst_column_id: data.dstid,
                    date: data.mdate,
                    time_spent: newdate
                }

                var trsql4 = db.query(tsql4, [trarr], function (err, res, fds) {
                    if (err) {
                        console.log(trsql4.sql);
                        throw err;
                    }
                })
            })
        });
    });

}

function insmovprojact(data) {

    var msql2 = 'SELECT id FROM project_activities WHERE date_creation > ? LIMIT 1';

    var msql5 = db.query(msql2, [data.mdate], function (err, rows, fds) {
        if (err) {
            console.log(msql5.sql);
            throw err;
        }
        let proactid = rows[0].id - 1;
        var msql4 = db.query('SELECT * FROM tasks WHERE id = ?', [data.taskid], function (err, rows, fds) {
            if (err) {
                console.log(msql4.sql); throw err;
            }

            let taskarr = rows[0];
            var msql1 = "SELECT COUNT(*) AS count FROM `tasks` WHERE `column_id` = ?";

            db.query(msql1, [data.dstid], function (err, rows, fds) {

                let newpos = rows[0].count + 1;
                var msql3 = 'INSERT INTO projectivities SET ?';

                let color, colname;

                if (data.movby == 4) {
                    color = "blue";
                    auname = "rittika.parmar";
                    aname = "Rittika Parmar";
                    cuname = "rittika.parmar";
                    cname = "Rittika Parmar";
                }
                if (data.movby == 5) {
                    color = "yellow";
                    auname = "urmila.chavan";
                    aname = "Urmila Chavan";
                    cuname = "urmila.chavan";
                    cname = "Urmila Chavan";
                }

                if (data.dstid == 1) colname = "Backlog";
                if (data.dstid == 2) colname = "Ready";
                if (data.dstid == 3) colname = "Work In Progress";
                if (data.dstid == 4) colname = "Done";

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
                    column_position: newpos
                };

                changearr = {
                    src_column_id: 1,
                    dst_column_id: data.dstid,
                    date_moved: data.mdate
                }

                Object.keys(taskarr).forEach(function (key) {
                    if (taskarr[key] != null && !isNaN(taskarr[key])) taskarr[key] = taskarr[key].toString();
                });

                Object.keys(catarr).forEach(function (key) {
                    if (catarr[key] != null && !isNaN(catarr[key])) catarr[key] = catarr[key].toString();
                });

                Object.keys(changearr).forEach(function (key) {
                    if (changearr[key] != null && !isNaN(changearr[key])) changearr[key] = changearr[key].toString();
                });

                arr = (Object.assign(taskarr, catarr));
                comarr = {
                    task_id: taskarr.id,
                    task: arr,
                    changes: changearr,
                    project_id: "1",
                    position: newpos,
                    column_id: data.dstid,
                    swimlane_id: "1",
                    src_column_id: "1",
                    dst_column_id: data.dstid,
                    date_moved: data.mdate,
                    recurrence_status: "0",
                    recurrence_trigger: "0"
                }

                totprojactarr = {
                    id: proactid,
                    date_creation: data.mdate,
                    event_name: "task.move.column",
                    creator_id: data.movby,
                    project_id: 1,
                    task_id: taskarr.id,
                    data: JSON.stringify(comarr)
                }

                console.log(totprojactarr);


                var mrsql3 = db.query(msql3, [totprojactarr], function (err, res, fds) {
                    if (err) {
                        console.log(mrsql3);
                        throw err;
                    }
                })


            });
        });
    });

}

function updatemovtask(data) {

    var msql1 = "SELECT COUNT(*) AS count FROM `tasks` WHERE `column_id` = ?";

    db.query(msql1, [data.dstid], function (err, rows, fds) {

        let newpos = rows[0].count + 1;
        var msql = 'UPDATE tasks SET ? WHERE id= ?';
        tmovarr = {
            column_id: data.dstid,
            position: newpos,
            date_modification: data.mdate,
            date_moved: data.mdate
        }
        db.query(msql, [tmovarr, data.taskid], function (err, rows, fds) {
            if (err) throw err;



        });
    });
}

router.post('/newcomment', (req, res) => {
    res.status(200).send({ "msg": "success" });
    console.log(req.body);
    updatecommtbl(req.body);
    insnewcommtbl(req.body);
    updateprojact(req.body.comdate);

});

function insnewcommtbl(data) {
    let icsql = 'SELECT id FROM comments WHERE date_creation > ? LIMIT 1';
    let icrsql = db.query(icsql, data.comdate, function (err, res, fds) {
        if (err) {
            console.log(icrsql.sql);
            throw err;
        }
        let newcomid = res[0].id - 1;
        let icsql1 = 'INSERT INTO comments SET ?';
        let newcomarr = {
            id: newcomid,
            task_id: data.taskid,
            user_id: data.user,
            date_creation: data.comdate,
            comment: data.comment,
            date_modification: data.comdate
        }
        let icrsql1 = db.query(icsql1, newcomarr, function (err, res, fds) {
            if (err) {
                console.log(icrsql1.sql);
                throw err;
            }
            insnewcomprojact(req.body, newcomid);
        })
    })
}

function updatecommtbl(data) {
    var csql = 'SELECT id FROM comments WHERE date_creation > ?';
    var crsql = db.query(csql, data.comdate, function (err, rows, fds) {
        if (err) {
            console.log(crsql.sql);
            throw err;
        }

        rows.forEach((row, index) => {
            let csql1 = 'UPDATE comments SET id = ? WHERE id = ?';
            let crsql1 = db.query(csql1, [row.id + 1, row.id], function (err, res, fds) {
                if (err) {
                    console.log(crsql1.sql);
                    throw err;
                }

            })
        })
    })
}

function insnewcomprojact(data, newcomid) {

    var msql2 = 'SELECT id FROM project_activities WHERE date_creation > ? LIMIT 1';

    var msql5 = db.query(msql2, [data.comdate], function (err, rows, fds) {
        if (err) {
            console.log(msql5.sql);
            throw err;
        }
        //console.log(rows.length);
        let proactid = rows[0].id - 1;
        var msql4 = db.query('SELECT * FROM tasks WHERE id = ?', [data.taskid], function (err, rows, fds) {
            if (err) {
                console.log(msql4.sql); throw err;
            }

            let taskarr = rows[0];
            var msql1 = "SELECT column_id, position FROM `tasks` WHERE id = ?";

            db.query(msql1, [data.taskid], function (err, rows, fds) {

                let colid = rows[0].column_id;
                let colpos = rows[0].position;
                var msql3 = 'INSERT INTO projectivities SET ?';

                let color;
                let colname;

                if (data.user == 4) {
                    color = "blue";
                    auname = "rittika.parmar";
                    aname = "Rittika Parmar";
                    cuname = "rittika.parmar";
                    cname = "Rittika Parmar";
                    email = "rittika.parmar@sigtech.co.uk";
                }
                if (data.user == 5) {
                    color = "yellow";
                    auname = "urmila.chavan";
                    aname = "Urmila Chavan";
                    cuname = "urmila.chavan";
                    cname = "Urmila Chavan";
                    email = "urmila.chavan@sigtech.co.uk"
                }

                if (colid == 1) colname = "Backlog";
                if (colid == 2) colname = "Ready";
                if (colid == 3) colname = "Work In Progress";
                if (colid == 4) colname = "Done";

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
                    column_position: colpos
                };

                commentarr = {
                    id: newcomid,
                    task_id: data.taskid,
                    user_id: data.user,
                    date_creation: data.comdate,
                    date_modification: data.comdate,
                    comment: data.comment,
                    reference: "",
                    username: auname,
                    name: aname,
                    email: email,
                    avatar_path: null
                }

                Object.keys(taskarr).forEach(function (key) {
                    if (taskarr[key] != null && !isNaN(taskarr[key])) taskarr[key] = taskarr[key].toString();
                });

                Object.keys(catarr).forEach(function (key) {
                    if (catarr[key] != null && !isNaN(catarr[key])) catarr[key] = catarr[key].toString();
                });

                Object.keys(commentarr).forEach(function (key) {
                    if (commentarr[key] != null && !isNaN(commentarr[key])) commentarr[key] = commentarr[key].toString();
                });

                arr = (Object.assign(taskarr, catarr));
                comarr = {
                    comment: commentarr,
                    task: arr
                }

                totprojactarr = {
                    id: proactid,
                    date_creation: data.comdate,
                    event_name: "comment.create",
                    creator_id: data.user,
                    project_id: 1,
                    task_id: taskarr.id,
                    data: JSON.stringify(comarr)
                }

                console.log(totprojactarr);

                /*
                                var mrsql3 = db.query(msql3, [totprojactarr], function (err, res, fds) {
                                    if (err) {
                                        console.log(mrsql3);
                                        throw err;
                                    }
                                });
                */

            });
        });
    });

}
router.post('/newtask', (req, res) => {
    res.status(200).send({ "msg": "success" });
    console.log(req.body);
    updateprojact(req.body.cdate);
    setTimeout(updatetask, 4000, req.body.cdate);
    setTimeout(insnewtask, 8000, req.body);
});


function updateprojact(date) {
    var sql = 'SELECT `id`, `creator_id`, `project_id`, `task_id` FROM project_activities WHERE date_creation > ? ORDER BY id DESC';

    db.query(sql, [date], function (err, rows, fds) {
        if (err) {
            console.log('in 1....');
            throw err;
        }
        console.log(rows);
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

        rows.forEach((row, index) => {
            currid = row.id;
            newid = currid + 1;

            updateval = {
                id: newid,
                column_id: row.column_id,
                project_id: row.project_id,
                swimlane_id: row.swimlane_id

            }
            //console.log(updateval);
            changeprojacttask(updateval, currid);
        })

    });

}


function updateqerr(sql) {
    i++;
    var fq = db.query(sql, function (err, res, fds) {
        //console.log('Hi');
        if (err) {
            if (i == 10000) {
                console.log(fq.sql);
                throw err;
            }
            updateqerr(fq.sql);
        }

    })
}



function changeprojacttask(val, id) {
    //console.log(id);
    var cq = db.query('SELECT * FROM project_activities WHERE task_id=?', [id], function (err, rows, fds) {
        if (err) {
            console.log('in 3....');
            throw err;
        }
        rows.forEach((row, index) => {

            if (row.event_name == "task.create") {
                //console.log(row);
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

            var sql1 = db.query('UPDATE project_activities SET ? WHERE id = ?', [newval, row.id], function (err, r, f) {
                if (err) {
                    console.log('in 4....');
                    updateqerr(sql1.sql);
                    throw err;
                }

            });

        });

        var q1 = db.query('UPDATE tasks SET ? WHERE id = ?', [val, id], function (err, res, fds) {
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

        var nsql = db.query('SELECT id FROM tasks WHERE date_creation > ? LIMIT 1', [data.cdate], function (err, res, fds) {
            if (err) {
                console.log('in 6....');
                throw err;
            }
            console.log(nsql.sql);
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
            var sql3 = db.query('INSERT INTO tasks SET ?', insval, function (err, results, fields) {
                if (err) {
                    console.log('in 7....');
                    console.log(insval);
                    updateqerr(sql3.sql);
                    throw err;
                }

                lasttask = results.insertId;
                console.log(lasttask);
                console.log(sql3.sql);

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
                    console.log(res[0]);
                    console.log(sql3.sql);
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