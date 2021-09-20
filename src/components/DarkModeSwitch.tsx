import React from 'react';
import styled from 'styled-components';

interface Props {
  isDarkMode: boolean;
  onChange: (val: boolean) => void;
}

const DarkModeSwitch = ({ isDarkMode, onChange }: Props) => {
  return (
    <SwitchContainer>
      <label htmlFor='toggle' className='toggle-control' >
        <input
          type='checkbox'
          id='toggle'
          checked={isDarkMode}
          onChange={() => onChange(!isDarkMode)}
        />
        <span className='control' />
      </label>
    </SwitchContainer>
  );
};

export default DarkModeSwitch;

const SwitchContainer = styled.div`
  width: ${(p) => `${p.theme.size.mdN}px`};

  .toggle-control {
    display: block;
    position: relative;
    padding-left: ${(p) => `${p.theme.size.mdN}px`};
    cursor: pointer;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    input:checked ~ .control {
      background-color: ${(p) => p.theme.baseColor.blue};

      &:after {
        left: ${(p) => `${p.theme.size.mdN - p.theme.size.mdN * 0.45}px`};
      }
    }

    .control {
      position: absolute;
      top: 0;
      left: 0;
      height: ${(p) => `${p.theme.size.mdN * 0.5}px`};
      width: ${(p) => `${p.theme.size.mdN}px`};
      border-radius: 50px;
      background-color: ${(p) => p.theme.baseColor.gray};
      transition: background-color ${(p) => p.theme.transition.default};

      &:after {
        content: "";
        position: absolute;
        left: ${(p) => `${p.theme.size.mdN * 0.05}px`};
        top: ${(p) => `${p.theme.size.mdN * 0.05}px`};
        width: ${(p) => `${p.theme.size.mdN * 0.5 - p.theme.size.mdN * 0.1}px`};
        height: ${(p) => `${p.theme.size.mdN * 0.5 - p.theme.size.mdN * 0.1}px`};
        border-radius: 50%;
        background: ${(p) => p.theme.baseColor.white};;
        transition: left ${(p) => p.theme.transition.default};
      }
    }
  }
`;
