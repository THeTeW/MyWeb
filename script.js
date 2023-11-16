function calculateBMI() {
    const weightInput = parseFloat(document.getElementById("weightBmi").value);
    const heightInput = parseFloat(document.getElementById("heightBmi").value);

    if (isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {
        alert("กรุณากรอกน้ำหนัก และส่วนสูง ให้ครบถ้วน.");
        return;
    }

    const bmi = weightInput / ((heightInput / 100) * (heightInput / 100));
    document.getElementById("bmi-value").textContent = bmi.toFixed(2);

    let bmiMessage = "";
    if (bmi < 18.5) {
        bmiMessage = "น้ำหนักน้อยเกินไป";
        document.getElementById("bmi-image").src = "images/underweight.jpg"; // กำหนดรูปภาพสำหรับ Underweight
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiMessage = "น้ำหนักปกติ";
        document.getElementById("bmi-image").src = "images/normal.jpg"; // กำหนดรูปภาพสำหรับ Normal Weight
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiMessage = "น้ำหนักเกิน";
        document.getElementById("bmi-image").src = "images/1overweight.jpg"; // กำหนดรูปภาพสำหรับ Overweight
    } else {
        bmiMessage = "อ้วน";
        document.getElementById("bmi-image").src = "images/obese.jpg"; // กำหนดรูปภาพสำหรับ Obese
    }
    document.getElementById("bmi-image").style.display = "block";

    document.getElementById("bmi-message").textContent = bmiMessage;
    
}