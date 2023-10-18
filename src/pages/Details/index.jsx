import { Container, Links, Content } from "./style.js"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"




export function Details() {
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid ducimus, expedita libero, iste ex soluta eum quam, quisquam quia natus accusantium. Nihil earum iure at fuga saepe. Dolor, neque.</p>
          
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express">
            </Tag>
            <Tag title="nodejs">
            </Tag>
          </Section>
          <Button title="Voltar"/>
      </Content>
    </main>
    </Container>
  )
}