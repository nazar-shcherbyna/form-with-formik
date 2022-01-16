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
    }


    &:focus {
        outline: none;
    }

    &::placeholder {
        color: var(--grey-2);
    }
`

export const FormSubmitSC = styled.input`
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    background: var(--blue);
    border-radius: 24px;
    border: none;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: var(--white);
    cursor: pointer;
    margin: 40px 0 16px;
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