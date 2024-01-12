//validation..

//it return true if form is valid else false
function validate(){
  let flag=false;

  //ye name field ke under ka data name ke object mai daal dega
  // name-field and name-field-msg are class names do we are getting object of that class using j query
  let name=$('.name-field').val();


  if(name=='' || name==undefined){
     $('.name-field-msg').html('Name is required').addClass('text-danger');
  }




    //ye email field ke under ka data email ke object mai daal dega
    let email=$('.email-field').val();
    
  
    if(email=='' || email==undefined){
       $('.email-field-msg').html('Email is required').addClass('text-danger');
    }
 



  
  return flag;
}