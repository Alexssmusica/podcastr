import * as Style from './styles';

const Main = ({ title = 'React Avançado', description = 'TypeScript, ReactJS, NextJS e Styled Components' }) => (
    <Style.Wrapper>
        <Style.Logo src="/img/logo.svg" alt="Logo" />
        <Style.Title>{title}</Style.Title>
        <Style.Description>{description}</Style.Description>
        <Style.Illustration src="/img/hero-illustration.svg" alt="Imagem ilustartiva" />
    </Style.Wrapper>
);

export default Main;
