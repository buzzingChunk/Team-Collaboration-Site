        var newLeader = function () {
            var teamMembers = new Array(20);
                teamMembers[0] = "Arthur";
                teamMembers[1] = "Bardia";
                teamMembers[2] = "Pat";
                teamMembers[3] = "Betsy";
                teamMembers[4] = "Ben S";
                teamMembers[5] = "Dan";
                teamMembers[6] = "Bhushan";
                teamMembers[7] = "Daya";
                teamMembers[8] = "Ani";
                teamMembers[9] = "JP";
                teamMembers[10] = "Anshul";
                teamMembers[11] = "Joe";
                teamMembers[12] = "Jessica";
                teamMembers[13] = "Gregg";
                teamMembers[14] = "Lee";
                teamMembers[15] = "Christina";
                teamMembers[16] = "Ben E";
                teamMembers[17] = "Will";
                teamMembers[18] = "Sujay";
                teamMembers[19] = "Randy";
                teamMembers[20] = "Satish";
            var firstRandomNumber = (Math.round((Math.random()*20)+1))
            document.getElementById("leader").innerHTML = ("Today's Leader is "
            +teamMembers[firstRandomNumber]+"</br>");
            
            
            
            
            
            
            
            
            
            
            
        }