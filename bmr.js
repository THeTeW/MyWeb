function calculateBMR() {
    let genderBmr = document.getElementById("genderBmr").value;
    let weightBmr = parseFloat(document.getElementById("weightBmr").value);
    let heightBmr = parseFloat(document.getElementById("heightBmr").value);
    let ageBmr = parseInt(document.getElementById("ageBmr").value);

    if (isNaN(weightBmr) || isNaN(heightBmr) || isNaN(ageBmr) || weightBmr <= 0 || heightBmr <= 0 || ageBmr <= 0) {
        alert("Please enter valid weight, height, and age.");
        return;
    }

    let bmr = 0;

    if (genderBmr === "male") {
        bmr = 88.362 + (13.397 * weightBmr) + (4.799 * heightBmr) - (5.677 * ageBmr);
    } 
    else {
        bmr = 447.593 + (9.247 * weightBmr) + (3.098 * heightBmr) - (4.330 * ageBmr);
    }

    document.getElementById("bmr-value").textContent = bmr.toFixed(2);
    return weightBmr
    
}

function calculateTDEE() {
    // ดึงค่า BMR จาก HTML
    const bmr = parseFloat(document.getElementById("bmr-value").textContent);
    const activityFactor = parseFloat(document.getElementById("activityFactor").value);
    
    if (isNaN(bmr) || isNaN(activityFactor)) {
        alert("Please calculate your BMR first and select an activity level.");
        return;
    }

    const tdee = bmr * activityFactor;
    document.getElementById("tdee-value").textContent = tdee.toFixed(2);
}


function planDiet() {
    const weightD = calculateBMR(weightBmr)
    const tdee = parseFloat(document.getElementById("tdee-value").textContent);
    const targetWeight = parseFloat(document.getElementById("targetWeight").value); //น้ำหนักที่คาดหวัง
    const days = parseInt(document.getElementById("days").value);
    
    if (isNaN(tdee) || isNaN(targetWeight) || isNaN(days)) {
        alert("Please calculate your TDEE, enter the target weight, and specify the number of days.");
        return;
    }
            var weightReq = weightD - targetWeight; //น้ำหนักที่ลดลง
			var totalCalories = 6614 * weightReq;  //แคลที่ต้องลดทั้งหมด

            console.log(weightD)
            console.log(tdee)
            console.log(targetWeight)
            console.log(days)
            console.log(weightReq)
            console.log(totalCalories)
            console.log()
            

            caloriesperDay = totalCalories / days; //แคลอรี่ที่ต้องการบริโภคต่อวัน
			caloriesperDay = caloriesperDay.toFixed(0);
            console.log(caloriesperDay)

			caloriesTotal = tdee - caloriesperDay; //แคลอรี่ต่อวันที่คุณควรบริโภค
			caloriesTotal = caloriesTotal.toFixed(0);
            console.log(caloriesTotal)
    

    document.getElementById("caloriesperDay").textContent = caloriesperDay
    document.getElementById("caloriesTotal").textContent = caloriesTotal
}

