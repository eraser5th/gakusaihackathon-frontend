import "./App.css";
import { Home, Person, Calendar, SVGColor, CollegeCap, Note, Graph, TodoList, QuestionRounded, Handshake, Schedule } from "./icons";
import { Sound } from "./icons/Sound";

export const App: React.FC = () => {
  return <div className="w-screen h-screen bg-slate-500 overflow-scroll">
    <Home color={SVGColor.black}/>
    <Home color={SVGColor.gray}/>
    <Home color={SVGColor.white}/>
    <Person color={SVGColor.black}/>
    <Person color={SVGColor.gray}/>
    <Person color={SVGColor.white}/>
    <Calendar color={SVGColor.black}/>
    <Calendar color={SVGColor.gray}/>
    <Calendar color={SVGColor.white}/>
    <CollegeCap color={SVGColor.black}/>
    <CollegeCap color={SVGColor.gray}/>
    <CollegeCap color={SVGColor.white}/>
    <Note color={SVGColor.black}/>
    <Note color={SVGColor.gray}/>
    <Note color={SVGColor.white}/>
    <Graph color={SVGColor.black}/>
    <Graph color={SVGColor.gray}/>
    <Graph color={SVGColor.white}/>
    <TodoList color={SVGColor.black}/>
    <TodoList color={SVGColor.gray}/>
    <TodoList color={SVGColor.white}/>
    <Sound color={SVGColor.black}/>
    <Sound color={SVGColor.gray}/>
    <Sound color={SVGColor.white}/>
    <QuestionRounded color={SVGColor.black}/>
    <QuestionRounded color={SVGColor.gray}/>
    <QuestionRounded color={SVGColor.white}/>
    <Handshake color={SVGColor.black}/>
    <Handshake color={SVGColor.gray}/>
    <Handshake color={SVGColor.white}/>
    <Schedule color={SVGColor.black}/>
    <Schedule color={SVGColor.gray}/>
    <Schedule color={SVGColor.white}/>
  </div>;
};
