import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";

export function Header() {
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Mar0la.png" alt="Foto do usuário"/>
        <div>
          <span>Bem-Vindo</span>
          <strong>Matheus Marins</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}