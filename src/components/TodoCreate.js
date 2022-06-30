import React, {useState} from 'react';
import styled,{css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';


const CircleButton = styled.button`
    background: #38d9a9;
    &:hover{
        background : #63e6be;
    }
    z-index : 5;
    cursor : pointer;
    width : 80px;
    height : 80px;
    display : flex;
    align-items: center;
    justify-content : center;
    font-size: 60px;
    position : absolute;
    bottom : 0;
    border-radius : 50%;
    left : 50%;
    transform : translate(-50%, 50%);
    color : #fff;
    border : none;
    outline : none;
    transition : 0.3s;
    ${props=>
        props.open && 
        css `
            background : #ff6b6b;
            &:hover{
                background : #ff8787;
            }
            transform : translate(-50%,50%) rotate(45deg);
        `
    }

`;

const InsertForm = styled.form`
    background : #f8f9fa;
    padding: 32px 32px 72px;
    border-bottom-left-radius : 16px;
    border-bottom-right-radius : 16px;
    border-top : 1px solid #e9ecef;

`;

const Input = styled.input`
    padding: 14px;
    border-radius: 4px;
    border : 1px solid #dee2e6;
    width : 100%;
    outline: none;
    font-size: 18px;
    box-sizing : border-box;
`;

const TodoCreate = () => {
    const [open, setOpen]=useState(false);
    const [value, setValue] = useState('');
    const onToggle = ()=>{setOpen(!open);}
    
    const dispatch=useTodoDispatch();
    const nextId = useTodoNextId();
    const onChange = e=>{setValue(e.target.value)};

    const onSubmit = e =>{
        e.preventDefault(); //새로고침 방지
        dispatch({
            type:'CREATE',
            todo:{
                id:nextId.current,
                text:value,
                done:false,
            }
        })
        setValue('');
        setOpen(false);
        nextId.current+=1;
    }
    return (
        <> {open &&(<InsertForm onSubmit={onSubmit}>
                        <Input placeholder='할일을 입력 후 enter를 눌러주세요' value={value} onChange={onChange}/>

                    </InsertForm>
            )}
            <CircleButton open={open} onClick={onToggle}>
                <MdAdd/>
            </CircleButton>
            
        </>
    );
};

export default TodoCreate;