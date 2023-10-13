// 인풋에 입력을 했을때만 작동
// 엔터도 클릭과 동일한 효과
// 입력 내용이 많을때 자동으로 스크롤 되게

const items = document.querySelector('.items')  //ul.items
const input = document.querySelector('.footer_input')  
const addBtn = document.querySelector('.footer_addBtn') 

const onAdd = () =>{  
  const text = input.value;
  if(text == ''){   //입력 내용이 없을때는 onAdd 함수에서 빠져나감
    input.focus();
    return;
  }  

  const item = createItem(text);  
  items.append(item)

  // 입력 내용이 많았을때 새로 추가된 아이템이 화면에 보이게(자동으로 스크롤링)
  item.scrollIntoView();

  input.value = '';
  input.focus();
}


// 새로운 아이템을 만드는 함수 정의
function createItem(text){
  const itemRow = document.createElement('li')
  itemRow.className = 'item_row'

  const item = document.createElement('div')
  item.setAttribute('class', 'item'); 

  const span = document.createElement('span');
  span.className = 'item_name';
  span.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'item_delBtn';
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
  
  deleteBtn.addEventListener('click', ()=>{
    items.removeChild(itemRow);
  })

  const itemDivider = document.createElement('div')
  itemDivider.className = 'item_divider'

  item.append(span,deleteBtn);
  itemRow.append(item,itemDivider);
  return itemRow
}


addBtn.addEventListener('click', onAdd)

//엔터를 쳤을대도 입력이 되게
input.addEventListener('keypress', event =>{
  //console.log(event.key);
  if ( event.key === 'Enter'){
    onAdd();
  }
})
