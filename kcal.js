 // รับ element ของ checkbox และ input
 const checkboxes = document.querySelectorAll('.row-checkbox');
 const inputs = document.querySelectorAll('.row-input');
 const totalElement = document.getElementById('total');

 // รับค่าเริ่มต้นของผลรวม
 let total = 0;

 // ฟังก์ชั่นสำหรับคำนวณผลรวม
 function calculateTotal() {
     total = 0;
     checkboxes.forEach((checkbox, index) => {
         if (checkbox.checked) {
             const row = checkbox.closest('tr');
             const value = parseInt(row.children[2].textContent); // รับค่าจากคอลัมน์ที่ 3
             const inputValue = parseInt(inputs[index].value);
             if (!isNaN(inputValue)) {
                 total += value * inputValue;
             }
         }
     });
return
     // แสดงผลรวมใน span ที่มี id="total"
     totalElement.textContent = total;
     console.log(total)
     console.log()
     console.log()
 }

 // เพิ่ม Event Listener สำหรับ checkbox และ input
 checkboxes.forEach((checkbox, index) => {
     checkbox.addEventListener('change', calculateTotal);
     inputs[index].addEventListener('input', calculateTotal);
 });