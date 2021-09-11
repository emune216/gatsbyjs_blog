import React from 'react';
import styled from 'styled-components';

interface Props {
  darkMode: boolean
  onChange: () => void
};

const DarkModeSwitch = ({
  darkMode,
  onChange,
}: Props) => {

  return (
    <SwitchContainer>
      <input
        className='toggle--checkbox'
        type='checkbox'
        id='toggle'
        checked={darkMode}
        onChange={onChange}
      />
      <label htmlFor='toggle' className='toggle--label' >
        <span className='toggle--label-background' />
      </label>
    </SwitchContainer>
  );
};

export default DarkModeSwitch;

const SwitchContainer = styled.div`
  width: 8rem;
  height: 3.1rem;
  transform: scale(0.3);

  .toggle--checkbox {
    display: none;
  }
  .toggle--checkbox:checked {
    /** This will all flip from sun to moon **/
    /** Change the label color **/
  }
  .toggle--checkbox:checked ~ .background {
    background: ${(p) => p.theme.baseColor.softIndigo};
  }
  .toggle--checkbox:checked + .toggle--label {
    background: ${(p) => p.theme.baseColor.indigo};
    border-color: ${(p) => p.theme.baseColor.deepIndigo};
    /** Change the cloud to stars **/
    /** Change the sun into the moon **/
    /** Show the dimples on the moon **/
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background {
    left: 60px;
    width: 5px;
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background:before {
    width: 5px;
    height: 5px;
    top: -25px;
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background:after {
    width: 5px;
    height: 5px;
    left: -30px;
    top: 20px;
  }
  .toggle--checkbox:checked + .toggle--label:before {
    background: ${(p) => p.theme.baseColor.white};
    border-color: ${(p) => p.theme.baseColor.gray};
    animation-name: switch;
    animation-duration: ${(p) => p.theme.transition.animationDuration};
    animation-fill-mode: forwards;
  }
  .toggle--checkbox:checked + .toggle--label:after {
    transition-delay: ${(p) => p.theme.transition.animationDuration};
    opacity: 1;
  }
  .toggle--label {
    /** Placeholder element, starting at blue **/
    width: 200px;
    height: 100px;
    background: ${(p) => p.theme.baseColor.blue};
    border-radius: 100px;
    border: 5px solid ${(p) => p.theme.baseColor.deepBlue};
    display: flex;
    position: relative;
    transition: ${(p) => p.theme.transition.default};
    /** The sun cloud and moon stars **/
    /** Sun/Moon element **/
    /** Gray dots on the moon **/
  }
  .toggle--label-background {
    width: 10px;
    height: 5px;
    border-radius: 5px;
    position: relative;
    background: ${(p) => p.theme.baseColor.white};
    left: 135px;
    top: 45px;
    transition: ${(p) => p.theme.transition.default};
  }
  .toggle--label-background:before {
    content: "";
    position: absolute;
    top: -5px;
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background: ${(p) => p.theme.baseColor.white};
    left: -20px;
    transition: ${(p) => p.theme.transition.default};
  }
  .toggle--label-background:after {
    content: "";
    position: absolute;
    top: 5px;
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background: ${(p) => p.theme.baseColor.white};
    left: -10px;
    transition: ${(p) => p.theme.transition.default};
  }
  .toggle--label:before {
    animation-name: reverse;
    animation-duration: ${(p) => p.theme.transition.animationDuration};
    animation-fill-mode: forwards;
    transition: ${(p) => p.theme.transition.default};
    content: "";
    width: 82px;
    height: 82px;
    border: 5px solid ${(p) => p.theme.baseColor.deepYellow};
    top: 4px;
    left: 4px;
    position: absolute;
    border-radius: 82px;
    background: ${(p) => p.theme.baseColor.yellow};
  }
  .toggle--label:after {
    transition-delay: 0ms;
    transition: ${(p) => p.theme.transition.fast};
    position: absolute;
    content: "";
    box-shadow:
      ${(p) => p.theme.baseColor.gray} -13px 0 0 2px,
      ${(p) => p.theme.baseColor.gray} -24px 14px 0 -2px;
    left: 143px;
    top: 23px;
    width: 10px;
    height: 10px;
    background: transparent;
    border-radius: 50%;
    opacity: 0;
  }

  @keyframes switch {
    0% {
      left: 4px;
    }
    60% {
      left: 4px;
      width: 112px;
    }
    100% {
      left: 104px;
      width: 82px;
    }
  }
  @keyframes reverse {
    0% {
      left: 104px;
      width: 82px;
    }
    60% {
      left: 72px;
      width: 112px;
    }
    100% {
      left: 4px;
    }
  }
`;
