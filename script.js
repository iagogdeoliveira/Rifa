<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rifa</title>
    <style>
        table {
            width: 50%;
            margin: auto;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
            cursor: pointer;
        }
        th {
            background-color: #f2f2f2;
        }
        .reserved {
            background-color: #ffcccc;
            pointer-events: none;
        }
    </style>
    <!-- Adicionando a biblioteca Firebase -->
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
    <script>
        // Configuração do Firebase
        var firebaseConfig = {

        };
        // Inicializando Firebase
        firebase.initializeApp(firebaseConfig);
        var database = firebase.database();

        document.addEventListener('DOMContentLoaded', (event) => {
            const cells = document.querySelectorAll('td');

            cells.forEach(cell => {
                cell.addEventListener('click', () => {
                    const number = cell.innerText;
                    reserveNumber(number, cell);
                });
            });

            loadReservedNumbers();
        });

        function reserveNumber(number, cell) {
            database.ref('reserved/' + number).set(true, (error) => {
                if (error) {
                    console.error('Erro ao reservar número:', error);
                } else {
                    cell.classList.add('reserved');
                }
            });
        }

        function loadReservedNumbers() {
            database.ref('reserved').once('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const number = childSnapshot.key;
                    const isReserved = childSnapshot.val();
                    if (isReserved) {
                        const cell = document.querySelector(`td[data-number='${number}']`);
                        if (cell) {
                            cell.classList.add('reserved');
                        }
                    }
                });
            });
        }
    </script>
</head>
<body>

<h2 style="text-align: center;">Rifa</h2>

<table>
    <thead>
        <tr>
            <th colspan="5">Número</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-number="1">1</td>
            <td data-number="2">2</td>
            <td data-number="3">3</td>
            <td data-number="4">4</td>
            <td data-number="5">5</td>
        </tr>
        <tr>
            <td data-number="6">6</td>
            <td data-number="7">7</td>
            <td data-number="8">8</td>
            <td data-number="9">9</td>
            <td data-number="10">10</td>
        </tr>
        <tr>
            <td data-number="11">11</td>
            <td data-number="12">12</td>
            <td data-number="13">13</td>
            <td data-number="14">14</td>
            <td data-number="15">15</td>
        </tr>
        <tr>
            <td data-number="16">16</td>
            <td data-number="17">17</td>
            <td data-number="18">18</td>
            <td data-number="19">19</td>
            <td data-number="20">20</td>
        </tr>
        <tr>
            <td data-number="21">21</td>
            <td data-number="22">22</td>
            <td data-number="23">23</td>
            <td data-number="24">24</td>
            <td data-number="25">25</td>
        </tr>
        <tr>
            <td data-number="26">26</td>
            <td data-number="27">27</td>
            <td data-number="28">28</td>
            <td data-number="29">29</td>
            <td data-number="30">30</td>
        </tr>
        <tr>
            <td data-number="31">31</td>
            <td data-number="32">32</td>
            <td data-number="33">33</td>
            <td data-number="34">34</td>
            <td data-number="35">35</td>
        </tr>
        <tr>
            <td data-number="36">36</td>
            <td data-number="37">37</td>
            <td data-number="38">38</td>
            <td data-number="39">39</td>
            <td data-number="40">40</td>
        </tr>
    </tbody>
</table>

</body>
</html>
