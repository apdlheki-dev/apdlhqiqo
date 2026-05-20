
"use client";

import { useState } from "react";

export default function Home() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [person, setPerson] = useState({
    name: "",
    age: "",
    city: "",
    phone: "",
    info: ""
  });

  const login = () => {
    if(user === "112233" && pass === "20202020"){
      setLogged(true);
    } else {
      alert("بيانات غير صحيحة");
    }
  };

  const addPerson = () => {
    setPeople([...people, person]);
    setPerson({
      name: "",
      age: "",
      city: "",
      phone: "",
      info: ""
    });
  };

  const filtered = people.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if(!logged){
    return (
      <div style={{padding:"40px",fontFamily:"sans-serif"}}>
        <h1>تسجيل الدخول</h1>

        <input placeholder="اسم المستخدم" onChange={(e)=>setUser(e.target.value)} />
        <br /><br />

        <input type="password" placeholder="كلمة المرور" onChange={(e)=>setPass(e.target.value)} />
        <br /><br />

        <button onClick={login}>دخول</button>
      </div>
    );
  }

  return (
    <div style={{padding:"40px",fontFamily:"sans-serif"}}>
      <h1>منصة إحصاء الأشخاص</h1>

      <h2>إضافة شخص</h2>

      <input placeholder="الاسم" value={person.name}
        onChange={(e)=>setPerson({...person,name:e.target.value})} />
      <br /><br />

      <input placeholder="العمر" value={person.age}
        onChange={(e)=>setPerson({...person,age:e.target.value})} />
      <br /><br />

      <input placeholder="المدينة" value={person.city}
        onChange={(e)=>setPerson({...person,city:e.target.value})} />
      <br /><br />

      <input placeholder="الهاتف" value={person.phone}
        onChange={(e)=>setPerson({...person,phone:e.target.value})} />
      <br /><br />

      <textarea placeholder="معلومات" value={person.info}
        onChange={(e)=>setPerson({...person,info:e.target.value})} />
      <br /><br />

      <button onClick={addPerson}>حفظ</button>

      <hr />

      <h2>البحث</h2>

      <input placeholder="ابحث عن شخص"
        onChange={(e)=>setSearch(e.target.value)} />

      <div>
        {filtered.map((p,i)=>(
          <div key={i} style={{border:"1px solid #ccc",padding:"10px",marginTop:"10px"}}>
            <h3>{p.name}</h3>
            <p>العمر: {p.age}</p>
            <p>المدينة: {p.city}</p>
            <p>الهاتف: {p.phone}</p>
            <p>{p.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
