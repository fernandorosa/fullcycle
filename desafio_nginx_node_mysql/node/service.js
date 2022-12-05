module.exports = function(app, config){
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    
    app.get('/', async function(req, res){
        let peopleName = req.query.peopleName;
        if(peopleName === undefined || peopleName === null){
            peopleName = "Nome Default";
        }
        const sqlInsert = "INSERT INTO people(name) values('"+peopleName+"')"
        const sqlSelect = `SELECT * FROM people`
        connection.query(sqlInsert);
        connection.query(sqlSelect, (error, results, fields) => {
            if (error) {
            return console.error(error.message);
            }

            var html = "";
            html = html.concat("<html>")
            html = html.concat("<body>")
            html = html.concat("<table>")
            html = html.concat("<tr>")
            html = html.concat("<th>")
            html = html.concat("ID")
            html = html.concat("</th>")
            html = html.concat("<th>")
            html = html.concat("NOME")
            html = html.concat("</th>")
            html = html.concat("</tr>")
            results.forEach(element => {
                html = html.concat("<tr>")
                html = html.concat("<td>" + element.id + "</td>");
                html = html.concat("<td>" + element.name + "</td>");
                html = html.concat("</tr>")
            })
            html = html.concat("</table>")
            html = html.concat("</body>")
            html = html.concat("</html>")
            res.send(html);
        });
    });
}