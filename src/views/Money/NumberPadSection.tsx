import React, {useState} from "react";
import {Wrapper} from "./NumberPadSection/Wrapper";
import {generateOutput} from "./NumberPadSection/generateOutput";
import { Button, Radio } from 'antd';

type Props = {
  value: number,
  onChange: (x: number) => void
  onOK?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  // const output = props.value.toString();
  const [output, _setOutput] = useState(props.value.toString());
  const setOutput = (output: string) => {
    let newOutput:string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const onButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === "OK") {
      props.onOK && props.onOK();
    }
    if ("0123456789.".split("").concat("删除", "清空").indexOf(text) > -1) {
      setOutput(generateOutput(text, output));

    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onButtonWrapper}>
        <button><span>1</span></button>
        <Button type="primary" >2</Button>
        <Button type="primary">3</Button>
        <Button type="primary">删除</Button >
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};