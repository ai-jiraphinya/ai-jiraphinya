---
title: "PostgreSQL"
datePublished: Thu Mar 14 2024 09:13:38 GMT+0000 (Coordinated Universal Time)
cuid: cltr0j979000209l84yzt52pe
slug: postgresql
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1710409630840/8b87b0b3-a30f-41ad-9a97-609ac704d74a.png

---

### (ช้างตรูอยู่หน่ายย) เสียงลุง จา พนม

งานพิเศษของน้องมิ้น

code ทั้งหมดนี้โดย จิรภิญญา เวชบุตร ไม่สงวนลิขสิทธิ์

หากต้องการสนับสนุนทุนการศึกษา/ชานมเย็นสักแก้ว 35 บาท

```sql
สุมาลี วงค์ศรีชา กสิกรไทย 121-3-84931-6 บัญชีเเม่
ปรีดิ์ปราโมทย์ เวชบุตร กสิกร 110-8-25747-0 บัญชีพี่มิว
```

---

## **การติดตั้ง PostgreSQL**

### การติดตั้ง PostgreSQL บนระบบปฏิบัติการ Windows 10 

ดาวน์โหลด PostgreSQL Installer Version 16

1. * URL: [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
        

```bash
wget https://get.enterprisedb.com/postgresql/postgresql-14.2-1-windows-x64.exe การต้องการตัวเก่า
```

เชื่อมต่อกับ PostgreSQL ผ่านทาง Command Line Interface (CLI)

สร้างฐานข้อมูลใหม่ใน PostgreSQL

สร้างตารางในฐานข้อมูล PostgreSQL และกำหนดค่าของฟิลด์

Tip:ติดตั้ง Extension สำหรับ PostgreSQL ใน VSCode

* การขยาย VSCode ด้วย Extension ชื่อ "PostgreSQL" ซึ่งเป็น Extension ที่ช่วยให้คุณสามารถเชื่อมต่อกับฐานข้อมูล PostgreSQL และทำงานกับข้อมูลได้ทันที
    
* URL: [https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres)
    

### 1.แยก:ประเภทข้อมูลในไฟล์ CSV เพื่อทำการสร้าง schema สำหรับฐานข้อมูล PostgreSQL : ได้แก่

* id: INTEGER
    
* name: TEXT
    
* date: DATE
    
* age: INTEGER
    
* education: TEXT
    
* occupation: TEXT
    
* current\_address: TEXT
    
* phone\_number: TEXT
    
* district: TEXT
    
* sub\_district: TEXT
    
* responsible\_person: TEXT
    
* mentor: TEXT
    
* link\_photo\_profile: TEXT
    

notes: TEXT

### 1.สร้างฐาน

```sql
CREATE DATABASE student_records;
```

### 2.สร้าง:ตาราง

```sql
CREATE TABLE my_table (
    id SERIAL PRIMARY KEY,
    name TEXT,
    date DATE,
    age INTEGER,
    education TEXT,
    occupation TEXT,
    current_address TEXT,
    phone_number TEXT,
    district TEXT,
    sub_district TEXT,
    responsible_person TEXT,
    mentor TEXT,
    link_photo_profile TEXT,
    notes TEXT
);
```

### 3.นำเข้า CSV เข้าสู่ฐานข้อมูล PostgreSQL โดยใช้คำสั่ง `\copy` หรือ `COPY` เช่น:

```sql
\copy my_table FROM 'path/to/mydata.csv' WITH CSV HEADER;
```

หรือ

```sql
COPY my_table FROM 'path/to/mydata.csv' WITH CSV HEADER;
```

เมื่อข้อมูลถูกนำเข้าสู่ฐานข้อมูล PostgreSQL เรียบร้อยแล้ว คุณสามารถใช้ SQL queries เพื่อสืบค้นข้อมูล หรือจัดการกับข้อมูลตามที่ต้องการได้ตามต้องการของพี่ เช่น SELECT, INSERT, UPDATE, DELETE ฯลฯ

---

### โปรดฟังอีกครั้งหนึ่ง:😁

PostgreSQL สร้างฐานข้อมูล:

```sql
CREATE DATABASE student_records;
```

SQL สร้างตารางเพื่อจัดเก็บข้อมูล:

```sql
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name TEXT,
    date_of_birth DATE,
    age INTEGER,
    education_level TEXT,
    occupation TEXT,
    current_address TEXT,
    phone_number TEXT,
    district TEXT,
    sub_district TEXT,
    responsible_person TEXT,
    mentor TEXT,
    link_photo_profile TEXT,
    notes TEXT
);
```

### นำเข้าข้อมูลจากไฟล์ CSV ลงในตาราง `student`:

```sql
COPY student FROM 'path/to/mydata.csv' WITH CSV HEADER;
```

มื่อได้ทำขั้นตอนข้างต้นเรียบร้อยแล้ว พี่จะได้ระบบฐานข้อมูลที่เก็บข้อมูล สำหรับการสืบค้นข้อมูล สามารถใช้ SQL queries เพื่อดึงข้อมูลตามที่ต้องการ และสามารถต่อยอดระบบได้ฟังก์ชันการค้นหา รายงาน หรือการทำงานกับโปรเจกต์/ข้อมูลอื่นๆ  
อันนี้ HTML เเบบง่ายๆ นะคะ

```pgsql
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Profile</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Student Profile</h1>
    </header>
    <main>
        <div id="student-table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Age</th>
                        <th>Education Level</th>
                        <th>Occupation</th>
                        <th>Current Address</th>
                        <th>Phone Number</th>
                        <th>District</th>
                        <th>Sub District</th>
                        <th>Responsible Person</th>
                        <th>Mentor</th>
                        <th>Link Photo Profile</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody id="student-data">
                    <!-- ข้อมูลของนักเรียนจะถูกแสดงที่นี่ -->
                </tbody>
            </table>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

CSS (styles.css):

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

main {
    padding: 20px;
}

#student-table {
    margin: 0 auto;
    width: 80%;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table th, table td {
    border: 1px solid #ddd;
    padding: 8px;
}

table th {
    background-color: #f2f2f2;
}

table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

table tbody tr:hover {
    background-color: #ddd;
}
```

JavaScript (script.js):

```javascript
javascriptCopy codedocument.addEventListener("DOMContentLoaded", function() {
    fetchStudentData();
});

function fetchStudentData() {
    fetch("get-student-data.php")
    .then(response => response.json())
    .then(data => {
        const studentData = data.students;
        const tbody = document.getElementById("student-data");

        studentData.forEach(student => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.date_of_birth}</td>
                <td>${student.age}</td>
                <td>${student.education_level}</td>
                <td>${student.occupation}</td>
                <td>${student.current_address}</td>
                <td>${student.phone_number}</td>
                <td>${student.district}</td>
                <td>${student.sub_district}</td>
                <td>${student.responsible_person}</td>
                <td>${student.mentor}</td>
                <td><img src="${student.link_photo_profile}" alt="Profile Photo" width="100"></td>
                <td>${student.notes}</td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error("Error fetching student data:", error));
}
```

ในโค้ด JavaScript ใช้ fetch API เพื่อดึงข้อมูลจากไฟล์ PHP (get-student-data.php) ที่สร้างขึ้นมาเพื่อส่งข้อมูลจากฐานข้อมูล PostgreSQL และเพิ่มข้อมูลของนักเรียนลงในตาราง HTML ในส่วนของ tbody โดยมีการเพิ่มลิงค์รูปภาพโปรไฟล์ของนักเรียน ฯ

CSS (styles.css)

CDN เป็นวิธีที่ดีเพื่อให้เว็บไซต์ หลดและแสดงผลเนื้อหาให้ดูดี พี่สามารถเพิ่ม CSS เพื่อใช้งาน Web font แบบ woff2 จาก CDN ได้โดยเพิ่มรหัสดังนี้ในไฟล์ styles.css: เช่น

```css
/* ตัวอย่างการเรียกใช้งาน Web font แบบ woff2 จาก CDN */
@import url('https://fonts.googleapis.com/css2?family=YourFontFamily:wght@400;700&display=swap');

/* ใช้งาน Web font ในตัวอักษร */
body {
    font-family: 'YourFontFamily', sans-serif;
}

/* สามารถเรียกใช้งาน Web font ในส่วนอื่น ๆ ของเว็บไซต์ตามต้องการได้ */
```

สำหรับ PHP (get-student-data.php) ที่ใช้สำหรับดึงข้อมูลจากฐานข้อมูล PostgreSQL คุณสามารถใช้รหัส PHP เพื่อเชื่อมต่อกับฐานข้อมูลและดึงข้อมูลออกมาได้ ตัวอย่างเช่น:

```php
<?php
// กำหนดข้อมูลการเชื่อมต่อฐานข้อมูล PostgreSQL
$host = "your_host";
$dbname = "your_database";
$user = "your_user";
$password = "your_password";

// เชื่อมต่อกับฐานข้อมูล PostgreSQL
$pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);

// สร้างคำสั่ง SQL เพื่อดึงข้อมูลจากตาราง student
$sql = "SELECT * FROM student";
$stmt = $pdo->query($sql);
$students = $stmt->fetchAll(PDO::FETCH_ASSOC);

// แสดงผลลัพธ์เป็น JSON
echo json_encode(['students' => $students]);
?>
```

ในตัวอย่างนี้ใช้ PDO (PHP Data Objects) เพื่อเชื่อมต่อกับฐานข้อมูล PostgreSQL และดึงข้อมูลจากตาราง student ออกมาเป็นรูปแบบ JSON ซึ่งสามารถใช้ใน JavaScript เพื่อแสดงผลบนหน้าเว็บไซต์ สามารถเข้าถึงไฟล์ get-student-data.php ผ่าน URL เพื่อทำการดึงข้อมูลฃมาแสดงผลในหน้าเว็บไซต์ของเราได้แบบแบงค์โฮธ์หรืออื่น ๆ ตามที่เหมาะสม

---

### เพิ่มเติม นะคะ เเต่ไม่จำเป็น

@font-face { font-family: SiamHTML; src: url('siamhtml.eot'); src: url('siamhtml.eot?') format('embedded-opentype'), url('siamhtml.woff2') format('woff2'), // เพิ่มไฟล์ WOFF 2.0 ไว้ข้างบน WOFF 1.0 url('siamhtml.woff') format('woff'), url('siamhtml.ttf') format('truetype'); }

จากโค้ด `@font-face rule` ด้านบน ถ้า web browser ไหนรองรับ WOFF 2.0 แล้ว มันก็จะเลือกเอาแบบ WOFF 2.0 ไปใช้แทน WOFF 1.0 ครับ เพียงเท่านี้เว็บเราก็จะโหลดเร็วขึ้นอีกนิดนึง ถึงแม้จะไม่มากนัก แต่ก็เร็วกว่าไม่ได้ทำแน่นอน

---

อีกเเบบหนึ่ง เชื่อมต่อกับ PostgreSQL:

```pgsql
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PostgreSQL Web Interface</title>
    <!-- เรียกใช้ CSS สำหรับการจัดรูปแบบหน้าเว็บ -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>PostgreSQL Web Interface</h1>
    </header>
    <main>
        <!-- สร้างฟอร์มสำหรับการเชื่อมต่อกับ PostgreSQL -->
        <form id="db-form">
            <label for="db-host">Host:</label>
            <input type="text" id="db-host" name="db-host" required>
            <label for="db-name">Database Name:</label>
            <input type="text" id="db-name" name="db-name" required>
            <label for="db-user">Username:</label>
            <input type="text" id="db-user" name="db-user" required>
            <label for="db-password">Password:</label>
            <input type="password" id="db-password" name="db-password">
            <button type="submit">Connect</button>
        </form>
        <!-- ส่วนสำหรับแสดงผลลัพธ์จากการสืบค้นหรือสอบถาม -->
        <div id="result-container">
            <!-- ผลลัพธ์จากการสืบค้นหรือสอบถามจะปรากฏที่นี่ -->
        </div>
    </main>
    <!-- เรียกใช้ JavaScript สำหรับการโต้ตอบกับเซิร์ฟเวอร์ PostgreSQL และการปรับเปลี่ยน DOM -->
    <script src="script.js"></script>
</body>
</html>
```

### อีกเเบบ : Python ด้วยไลบรารี psycopg2 เพื่อเชื่อมต่อกับฐานข้อมูล PostgreSQL และทำการสร้างตาราง student

```python
import psycopg2

# กำหนดข้อมูลการเชื่อมต่อฐานข้อมูล PostgreSQL
conn = psycopg2.connect(
    host="your_host",
    database="your_database",
    user="your_user",
    password="your_password"
)

# สร้าง cursor object เพื่อทำการ execute คำสั่ง SQL
cur = conn.cursor()

# คำสั่ง SQL สำหรับสร้างตาราง student
create_table_query = '''
CREATE TABLE IF NOT EXISTS student (
    id SERIAL PRIMARY KEY,
    name TEXT,
    date_of_birth DATE,
    age INTEGER,
    education_level TEXT,
    occupation TEXT,
    current_address TEXT,
    phone_number TEXT,
    district TEXT,
    sub_district TEXT,
    responsible_person TEXT,
    mentor TEXT,
    link_photo_profile TEXT,
    notes TEXT
);
'''

# Execute คำสั่ง SQL เพื่อสร้างตาราง student
cur.execute(create_table_query)

# Commit การเปลี่ยนแปลงและปิดการเชื่อมต่อ
conn.commit()

# ปิด cursor และการเชื่อมต่อ
cur.close()
conn.close()
```

นอกจากคำสั่ง CREATE TABLE ที่ได้แสดงตัวอย่างไว้แล้ว เพื่อให้ฐานข้อมูล PostgreSQL ทำงานได้อย่างถูกต้องและมีประสิทธิภาพ คุณจำเป็นต้องใช้คำสั่งเพิ่มเติมเพื่อจัดการข้อมูล ดังนี้:

1. คำสั่ง CREATE DATABASE: เพื่อสร้างฐานข้อมูลใหม่ (หากยังไม่มีฐานข้อมูลที่เกี่ยวข้อง)
    

```sql
CREATE DATABASE your_database_name;
```

2. คำสั่ง INSERT INTO: เพื่อเพิ่มข้อมูลเข้าไปในตาราง
    

```sql
INSERT INTO student (name, date_of_birth, age, education_level, occupation, current_address, phone_number, district, sub_district, responsible_person, mentor, link_photo_profile, notes) VALUES ('John Doe', '1990-01-01', 31, 'Bachelor', 'Engineer', '123 Main St', '1234567890', 'Some District', 'Some Subdistrict', 'Jane Smith', 'Dr. Smith', 'http://example.com/profile.jpg', 'Some notes');
```

3. คำสั่ง SELECT: เพื่อดึงข้อมูลจากตาราง
    

```sql
SELECT * FROM student;
```

4. คำสั่ง UPDATE: เพื่ออัปเดตข้อมูลที่มีอยู่ในตาราง
    

```sql
UPDATE student SET age = 32 WHERE name = 'John Doe';
```

5. คำสั่ง DELETE: เพื่อลบข้อมูลออกจากตาราง
    

```sql
DELETE FROM student WHERE name = 'John Doe';
```

6. คำสั่ง COMMIT: เพื่อยืนยันการเปลี่ยนแปลงที่มีผลกับฐานข้อมูล
    

```sql
COMMIT;
```

7. คำสั่ง ROLLBACK: เพื่อยกเลิกการเปลี่ยนแปลงที่ไม่ต้องการ
    

```sql
ROLLBACK;
```

คำสั่งเหล่านี้เป็นส่วนหนึ่งของการจัดการฐานข้อมูล PostgreSQL เพิ่ม, อัปเดต, ลบ, และค้นหาข้อมูลในฐานข้อมูล

---

\*ไว้ขยายงานเขียน เครดิต Github.com/ai-jiraphinya

1. การเชื่อมต่อและใช้งาน PostgreSQL ผ่านทางภาษาโปรแกรม
    
    * คำแนะนำ: สามารถใช้ไลบรารีหรือไดรเวอร์ที่มีอยู่ในภาษาโปรแกรมต่างๆ เช่น psycopg2 สำหรับ Python, pg-promise สำหรับ JavaScript, JDBC สำหรับ Java เพื่อเชื่อมต่อและทำงานกับฐานข้อมูล PostgreSQL
        
2. การเรียกใช้งานคำสั่ง SQL ผ่านภาษาโปรแกรม
    
    * คำแนะนำ: ใช้คำสั่ง SQL ในรูปแบบของสตริงในภาษาโปรแกรมเพื่อสร้างและจัดการข้อมูลในฐานข้อมูล PostgreSQL
        
3. การสร้างและการจัดการข้อมูลผ่านทางโปรแกรม
    
    * คำแนะนำ: ใช้คำสั่ง SQL เพื่อเพิ่ม, อัปเดต, และลบข้อมูลในตาราง
        
4. การทำงานกับข้อมูลแบบทรานแซ็กชัน (Transactions)
    
    * คำแนะนำ: เริ่มต้นทรานแซ็กชัน, ยืนยัน (Commit) และยกเลิก (Rollback) ทรานแซ็กชัน สำหรับการปรับเปลี่ยนข้อมูลในฐานข้อมูล
        
5. การจัดการและการดูแลฐานข้อมูล
    
    * คำแนะนำ: สำรองข้อมูล (Backup) และคืนค่าข้อมูล (Restore) เพื่อรักษาความปลอดภัยของข้อมูล และจัดการกับผู้ใช้และสิทธิ์การเข้าถึงฐานข้อมูล
        
6. การสร้างคำสั่ง SQL ที่ซับซ้อน
    
    * คำแนะนำ: เขียนคำสั่ง SQL ที่มีเงื่อนไขซับซ้อน เช่น JOIN และคำสั่งที่ใช้ในการดึงข้อมูลที่มีโครงสร้างซับซ้อนโดยใช้เงื่อนไขที่ซับซ้อน
        

การอธิบายเพิ่มเติม: ในการอธิบายเพิ่มเติมควรรวมการใช้งานตัวอย่างเพื่อแสดงให้เห็นถึงวิธีการใช้งานของคำสั่ง SQL ที่ซับซ้อนในสถานการณ์ที่เป็นไปได้ทั้งหมด

---
