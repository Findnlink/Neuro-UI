import React from 'react'
import scss from './Docs.module.scss'

import GettingStarted from './pages/GettingStarted.mdx'
import Demo from './pages/Demo.mdx'
import Templates from './pages/Templates.mdx'
import Documentation from './pages/Documentation.mdx'
import QuickStart from './pages/QuickStart.mdx'
import Icons from './pages/Icons.mdx'

import Button from '../Button/Button.mdx'
import ButtonGroup from '../ButtonGroup/ButtonGroup.mdx'
import Card from '../Card/Card.mdx'
import Checkbox from '../Checkbox/Checkbox.mdx'
import CollapseMDX from '../Collapse/Collapse.mdx'
import ContextMenu from '../ContextMenu/ContextMenu.mdx'
import GridMDX from '../Grid/Grid.mdx'
import DropDown from '../DropDown/DropDown.mdx'
import Icon from '../Icon/Icon.mdx'
import Input from '../Input/Input.mdx'
import Kanban from '../Kanban/Kanban.mdx'
import LineMDX from '../Line/Line.mdx'
import Modal from '../Modal/Modal.mdx'
import SpacerMDX from '../Spacer/Spacer.mdx'
import Tag from '../Tag/Tag.mdx'
import TextMDX from '../Text/Text.mdx'
import TextArea from '../TextArea/TextArea.mdx'
import Code from '../Code/Code.mdx'
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper.mdx'
import ThemeChangerMDX from '../ThemeChanger/ThemeChanger.mdx'
import StoreProviderMDX from '../StoreProvider/StoreProvider.mdx'
import ToggleMDX from '../Toggle/Toggle.mdx'
import ToastMDX from '../Toast/Toast.mdx'

import { Text, Collapse, Spacer, Line, StoreProvider } from '../index'
import { useNavigate, Routes, Route } from 'react-router-dom'

export default function Docs() {
  let navigate = useNavigate()
  return (
    <StoreProvider disableSplashScreen defaultTheme="dark">
      <div className={scss.docs}>
        <div className={scss.left}>
          <div className={scss.navigation}>
            <div className={scss.logo}>
              <img src="../../assets/logo.svg" />
              <div className={scss.text}>
                <Text scale="xl" weight="bold">
                  Neuro UI
                </Text>
                <Text href="https://www.github.com" scale="s">
                  View on GitHub
                </Text>
              </div>
            </div>
            <div className={scss.dropdown}>
              <Collapse items={['Quick start', 'Getting started', 'Documentation']}>
                Getting Started
              </Collapse>
              <Line margin="s" />
              <Collapse
                items={[
                  'Button',
                  'Button Group',
                  'Card',
                  'Checkbox',
                  'Code',
                  'Collapse',
                  'Component Wrapper',
                  'Context Menu',
                  'Grid',
                  'Dropdown',
                  'Icon',
                  'Input',
                  'Kanban',
                  'Line',
                  'Modal',
                  'Spacer',
                  'Tag',
                  'Text',
                  'Text Area',
                  'Theme Changer',
                  'Toast',
                  'Toggle',
                  'Store Provider'
                ]}
              >
                Components
              </Collapse>
              <Line margin="s" />
              <Collapse onClick={() => navigate('/icons')}>Icons</Collapse>
              <Line margin="s" />
              <Collapse onClick={() => navigate('/demo')}>Demo</Collapse>
              <Line margin="s" />
              <Collapse onClick={() => navigate('/templates')}>Templates</Collapse>
            </div>
            <div className={scss.footer}>
              <Text scale="s">
                © 2022 Findnlink · <Text href="https://www.twitter.com">jaemil</Text>
              </Text>
            </div>
          </div>
        </div>
        <div className={scss.right}>
          <div className={scss.content}>
            <Routes>
              <Route path="/" element={'Home'} />
              <Route path="/quickstart" element={<QuickStart />} />
              <Route path="/gettingstarted" element={<GettingStarted />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/button" element={<Button />} />
              <Route path="/buttongroup" element={<ButtonGroup />} />
              <Route path="/card" element={<Card />} />
              <Route path="/checkbox" element={<Checkbox />} />
              <Route path="/code" element={<Code />} />
              <Route path="/collapse" element={<CollapseMDX />} />
              <Route path="/componentwrapper" element={<ComponentWrapper />} />
              <Route path="/contextmenu" element={<ContextMenu />} />
              <Route path="/grid" element={<GridMDX />} />
              <Route path="/dropdown" element={<DropDown />} />
              <Route path="/icon" element={<Icon />} />
              <Route path="/input" element={<Input />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/line" element={<LineMDX />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/spacer" element={<SpacerMDX />} />
              <Route path="/tag" element={<Tag />} />
              <Route path="/text" element={<TextMDX />} />
              <Route path="/textarea" element={<TextArea />} />
              <Route path="/themechanger" element={<ThemeChangerMDX />} />
              <Route path="/toast" element={<ToastMDX />} />
              <Route path="/toggle" element={<ToggleMDX />} />
              <Route path="/storeprovider" element={<StoreProviderMDX />} />
              <Route path="/icons" element={<Icons />} />
            </Routes>
          </div>
        </div>
      </div>
    </StoreProvider>
  )
}
