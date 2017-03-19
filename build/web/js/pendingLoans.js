$(document).ready(function(){
   $('#acc2').click(function(){
      $('#div2').hide('slow').remove(); 
      alert("Loan Accepted");
   });
   $('#rej1').click(function(){
      $('#div1').hide('slow').remove(); 
      alert("Loan rejected");
   });
   
   $('#rej2').click(function(){
      $('#div2').hide('slow').remove(); 
      alert("Loan rejected");
   });
   $('#acc1').click(function(){
      alert("Cannot Accept Loan\nLoan Documents Not Submitted");
   });
});
