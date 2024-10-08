"use client"

import usuarios from "@/components/jason-chats.json"
import ComponenteChat from "@/components/chat.jsx";
import ComponenteAgregarMensajes from "@/components/addMessage.jsx";
import { useEffect, useState } from "react";
import { useSocket } from "@/hooks/useSocket";

export default function Home() {

  const {socket, isConnected} = useSocket()

  useEffect(()  => {
    if(!socket) return;

    socket.on('pingAll', (data) => {console.log("recibido ", data)})

  }, [socket, isConnected])

  function handleClick(){
    socket.emit('pingAll', {message: "message"})
  }

  return(
    <div>

      <h1>Whatsapp</h1>

      {usuarios.map((chat) => {
        
      return (<ComponenteChat nombreUsuario={chat.username}/>)}
      )}
<img src ="https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3408.jpg" alt ="fotoperfil" />
      <ComponenteAgregarMensajes textButton="A"/>

  </div>
  );
}
