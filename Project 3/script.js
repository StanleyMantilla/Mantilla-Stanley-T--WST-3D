document.getElementById("addBtn").addEventListener("click", function() {
            let num1 = Number(document.getElementById("first number").value);
            let num2 = Number(document.getElementById("second number").value);
            let num3 = Number(document.getElementById("third number").value);
            let total = (num1 + num2 + num3);
            let average = (num1 + num2 + num3) / 3;
            let result;

            //result
            if(average == 100){
            result = "Excellent!"
            } else if (average >= 90){
            result = "Excellent!"
            }else if(average >=80){
            result = "Very Good!"
            }else if(average >=75){
            result = "Passed!"
            }else {
            result = "Failed!"
            }

            document
                .getElementById("result").innerHTML = 
                "Total: " + total + "<br>"  +
                "Average: " + average + "<br>" +
                "Result: " + result;
});