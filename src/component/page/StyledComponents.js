import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 16px;
    width: calc(100%-32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 720px;

    //Container 내의 모든 직계 자식
    & > * {
        //마지막 자식이 아니라면
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;