import styled from "styled-components";

export const SignInSC = styled.div`
    width: 404px;
    padding: 48px 40px;
    border: 2px solid var(--grey-0);
    border-radius: 16px;

    & > h4 {
        color: var(--grey-2);
        font-size: 1.6rem;
        line-height: 2rem;
        font-weight: 500;
        margin: 0 0 4px;
    }

    & > h2 {
        color: var(--black);
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight: 700;
        margin: 0 0 40px;
    }

`

export const SignInFormSC = styled.form`
`

export const FormInputWrapperSC = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    margin-bottom: 24px;

    & > svg {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
`

export const FormLabelSC = styled.div`
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: var(--black);
    margin-bottom: 8px;
    font-weight: 500;
`

export const FormInputSC = styled.input`
    width: 100%;
    height: 100%;
    padding: 12px 12px 12px 36px;
    color: var(--black);
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 500;
    border-radius: 24px;
    overflow: hidden;
    border: ${p => p.isTouched ? (p.isValid ? '1px solid var(--green);' : '1px solid var(--red);') : '1px solid var(--grey-1)'};

    &:focus {
        border: 1px solid var(--blue);
        outline: none;
    }

    &::placeholder {
        color: var(--grey-2);
    }
`

export const FormSubmitWrapperSC = styled.div`
    height: 48px;
    border-radius: 24px;
    margin: 40px 0 16px;
    overflow: hidden;
    background: var(--blue);
`

export const FormSubmitSC = styled.button`
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: none;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: var(--white);
    cursor: pointer;
    background: var(--blue);

    &:hover > span {
        background: linear-gradient(to right, #FFF 0, #FFD215 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:focus {
        outline: none;
    }
`

export const FormNav = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    & > span {
        color: var(--grey-2);
        margin-right: 8px;
    }

    & > a {
        color: var(--black);
        text-decoration: none;
    }
`