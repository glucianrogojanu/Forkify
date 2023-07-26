#### P.S.: La codul din JS am scris comentarii pentru o mai usoara intelegere.

### Ca sa puteti vedea aplicatia, va rog urmati cei 5 pasi:
###### 1. Obtineti repository-ul pe calculatorul dvs. prin comanda 'git clone URL'; 
###### 2. Deschideti folderul 'FORKIFY-App' in Visual Studio Code(Sau altele, dar am lucrat in Visual).
###### 3. Verificati sa aveti 'Node.js' instalat. Puteti face asta prin a accesa comanda 'npm -v' in terminalul din Visual Studio. Daca il aveti instalat, sub comanda va aparea versiunea ce o aveti. Daca nu, trebuie sa-l instalati.
###### 4. Dupa ce v-ati asigurat ca aveti 'Node.js' instalat, scrieti comanda 'npm install' in terminalul din Visual Studio. Asteptati pana se instaleaza toate fisierele necesare.
###### 5. Dupa instalarea fisierelor, scrieti comanda 'npm start' in terminal, dupa care copiati link-ul aparut in terminal(Link-ul este ceva de forma:  http://localhost:1234/  ) si il deschideti in Chrome(Sau alt browser).

### Functionalitatea site-ului:
###### 1. Cautam un produs in bara de cautare(Exemplu: Pizza, Burger etc) dupa care rezultatele vor fi afisate in partea stanga(In caz ca nu exista rezultate pentru un produs specific, vom primi un mesaj).
###### 2. Daca in urma cautarii avem un total de maxim 10 produse, vom avea o singura pagina. In caz contrar, putem sa ne ducem la alte pagini de pe butoanele aflate in josul paginii(Page 1, Page 2 etc).
###### 3. Cand dam click pe un produs aflat in lista cautarilor, acesta va fi colorat diferit si va fi afisat in partea dreapta insotit de mai multe detalii: Poza, nume, numarul de portii, daca este rezervat sau nu, ingredientele folosite etc. 
###### 4. Legat de produsul afisat in partea dreapta, putem sa-i modificam numarul de portii(De pe butoanele "-"/"+"), moment in care se va schimba si necesarul total de ingrediente.
###### 5. Tot legat de produsul din dreapta, putem sa-l rezervam(De pe butonul aflat in dreapta -/+), moment in care va fi afisat sus la "Bookmarks". Legat de produsele afisate la "Bookmarks", putem da click pe oricare de acolo si ne va deschide fereastra cu acesta, plus ca va fi colorat diferit si in partea stanga si in lista "Bookmarks". Evident, un produs rezervat anterior, poate fi facut sa nu mai fie rezervat prin apasarea aceluiasi buton.
