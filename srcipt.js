console.log("Pacharapol Jensamut");
console.log("YOK");




let currentInput = ''; // เก็บค่าที่พิมพ์บนหน้าจอ
let firstValue = null; // เก็บค่าตัวเลขตัวแรก
let operation = null; // เก็บการดำเนินการ

// ฟังก์ชันที่เพิ่มตัวเลขเข้าไปในหน้าจอ
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// ฟังก์ชันที่ล้างหน้าจอ
function clearDisplay() {
    currentInput = '';
    firstValue = null;
    operation = null;
    document.getElementById('display').value = '';
}

// ฟังก์ชันที่บันทึกการดำเนินการ (เช่น +, -, *, /)
function operate(op) {
    if (firstValue === null) {
        firstValue = parseFloat(currentInput);
        currentInput = '';
        operation = op;
    }
}

// ฟังก์ชันคำนวณผลลัพธ์
function calculate() {
    if (operation && firstValue !== null) {
        const secondValue = parseFloat(currentInput);
        let result;
        switch (operation) {
            case '+':
                result = firstValue + secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                if (secondValue === 0) {
                    result = 'Error'; // แสดงข้อผิดพลาดเมื่อหารด้วย 0
                } else {
                    result = firstValue / secondValue;
                }
                break;
        }
        document.getElementById('display').value = result;
        currentInput = result.toString();
        firstValue = null;
        operation = null;
    }
}
