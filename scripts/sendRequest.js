    function sendRequest() {

        const x = parseFloat(document.getElementById("x").value);
        const y = parseFloat(document.querySelector('input[name="y"]:checked')?.value);
        const r = parseFloat(document.getElementById("r").value);

    function hasValidPrecision(value, maxPrecision) {
          const decimalPart = value.toString().split(".")[1];
          return !decimalPart || decimalPart.length <= maxPrecision;
    }

    if (!hasValidPrecision(x, 5)) {
          alert("X может содержать не более 5 знаков после запятой.");
          return;
      }
    if (!hasValidPrecision(y, 5)) {
          alert("Y может содержать не более 5 знаков после запятой.");
          return;
    }
    if (!hasValidPrecision(r, 5)) {
          alert("R может содержать не более 5 знаков после запятой.");
          return;
      }

    if (isNaN(x) && isNaN(y) && isNaN(r)) {
            alert("Введите корректные значения для X, Y и R.");
            return;
        }
    if (isNaN(x) && isNaN(y) && !isNaN(r)) {
            alert("Введите корректные значения для X и Y.");
            return;
        }
        if (isNaN(y) && !isNaN(x) && isNaN(r)) {
            alert("Введите корректные значения для Y и R.");
            return;
        }
        if (isNaN(x) && !isNaN(y) && isNaN(r)) {
            alert("Введите корректные значения для X и R.");
            return;
        }
        if (isNaN(x) && !isNaN(y) && !isNaN(r)) {
            alert("Введите корректные значения для X.");
            return;
        }
        if ( !isNaN(x) && isNaN(y) && !isNaN(r)) {
            alert("Введите корректные значения для Y.");
            return;
        }
        if (isNaN(r) && !isNaN(x) && !isNaN(y)) {
            alert("Введите корректные значения для R.");
            return;
        }



        if ((x<-3 || x>3) && (y<-4 || y>4) && (r<2 || r>5)) {
            alert("Допустимые диапазоны значений X = {-3...3} Y = {-4...4} R = {2...5}");
            return;
        }
        if ((x<-3 || x>3) && (y<-4 || y>4) && (r>=2 || r<=5)) {
            alert("Допустимые диапазоны значений X = {-3...3} Y = {-4...4}");
            return;
        }
        if ((x>=-3 || x<=3) && (y<-4 || y>4) && (r<2 || r>5)) {
            alert("Допустимые диапазоны значений Y = {-4...4} R = {2...5}");
            return;
        }
        if ((x<-3 || x>3) && (y>=-4 || y<=4) && (r<2 || r>5)) {
            alert("Допустимые диапазоны значений X = {-3...3} R = {2...5}");
            return;
        }
        if ((x<-3 || x>3) && (y>=-4 || y<=4) && (r>=2 || r<=5)) {
            alert("Допустимые диапазоны значений X = {-3...3}");
            return;
        }
        if (x>=-3 || x<=3) && (y<-4 || y>4) && (r>=2 || r<=5)) {
            alert("Допустимые диапазоны значений Y = {-4...4}");
            return;
        }
        if ((x>=-3 || x<=3) && (y>=-4 || y<=4) && (r<2 || r>5)) {
            alert("Допустимые диапазоны значений R = {2...5}");
            return;
        }





        const data = JSON.stringify({ x: x, y: y, r: r });

        fetch("http://localhost:8081/fcgi-bin/web1-0.jar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
            .then(response => response.json())
            .then(result => {

                const resultsBody = document.getElementById("resultsBody");
                const newRow = document.createElement("tr");

                newRow.innerHTML = `


                <td>${result.x}</td>
                <td>${result.y}</td>
                <td>${result.r}</td>
                <td>${result.result ? "&#x2714;" : "&#x274C;"}</td>
                <td>${result.currentTime}</td>
                <td>${result.executionTime}</td>

            `;

                resultsBody.appendChild(newRow);
            })
            .catch(error => {
                console.error("Ошибка при отправке запроса:", error);
            });
    }