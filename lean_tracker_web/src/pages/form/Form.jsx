import React, { useState, useEffect } from 'react'
import './Form.css'

export default function Form() {

  const [form, setForm] = useState({
    desc: "",
    pics: [],
    platform: ""
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <main className="Form">
      <h1>Captura de errores</h1>
      <section>
        <div className="FormInput">
          <label>Descripcion del problema</label>
          <textarea rows="5" cols="10"></textarea>
        </div>
      </section>
      <section>
        <div className="FormInput">
          <label>Captura de evidencias</label>
          <input type="file" onChange={(v) => setForm({...form, pics: [...form.pics, ...v.target.files]})} />
        </div>

      </section>
      <section>
        <div className="FormInput">
          <label>Plataforma</label>
          <input type="text" onChange={(v) => setForm({...form, platform: v.target.value})} />
        </div>
      </section>
      <section>
        <button>Enviar</button>
      </section>
    </main>
  )
}
