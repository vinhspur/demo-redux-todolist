import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../redux/actions";
import { todoInput } from "../../redux/selectors";

export default function TodoList() {
  const todoList = useSelector(todoInput);
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const dispath = useDispatch();
  const handleButtonClick = () => {
    var id = Math.floor(Math.random() * 100000000000000000);
    dispath(
      addTodo({
        id: id,
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriority = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            onSelect={handlePriority}
            value={priority}
            defaultValue={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red"> High </Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue"> Medium </Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray"> Low </Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleButtonClick} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
