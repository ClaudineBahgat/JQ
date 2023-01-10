$( ()=>{
    let btn=$("#btnAdd");
    let taskBox=$(".tasksBox"); 
    let textField=$("#taskInput")
    
    
    btn.click(function(event){
    let taskContainer=$("<div class='container'></div>")
    let task=$("<label class='task'/>");
    let doneBtn=$("<button class='done'>Done</button>");
    let deleteBtn=$("<button class='delete'>Delete</button>");
    task.text(textField.val())
    taskContainer.append(task,doneBtn,deleteBtn)
    taskBox.append(taskContainer)
    
    doneBtn.click(function(){
        $(this).parent().toggleClass("TaskDone")
    })
    
    deleteBtn.click(function(){
        $(this).parent().remove();
    })
    })

});