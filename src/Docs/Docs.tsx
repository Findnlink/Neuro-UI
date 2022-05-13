import React from 'react'
import scss from './Docs.module.scss'

import Logo from './assets/logo.svg'

import GettingStarted from './pages/GettingStarted.mdx'
import Demo from './pages/Demo.mdx'
import Templates from './pages/Templates.mdx'
import Documentation from './pages/Documentation.mdx'
import QuickStart from './pages/QuickStart.mdx'
import Icons from './pages/Icons.mdx'
import Introduction from './pages/Introduction.mdx'

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
import TabsMDX from '../Tabs/Tabs.mdx'
import ErrorMessageMDX from '../ErrorMessage/ErrorMessage.mdx'
import NavigationMDX from '../Navigation/Navigation.mdx'
import LayoutMDX from '../Layout/Layout.mdx'
import FooterMDX from '../Footer/Footer.mdx'
import ImageGalleryMDX from '../ImageGallery/ImageGallery.mdx'

import {
  Text,
  StoreProvider,
  ThemeChanger,
  Navigation,
  Layout,
  Image,
  Flex,
  Tabs,
  TabsHeader,
  Tab
} from '../index'
import { Routes, Route } from 'react-router-dom'

export default function Docs() {
  return (
    <StoreProvider disableSplashScreen defaultTheme="dark">
      <Layout type="docs">
        <Flex padding="0 xl" flexDirection="row" alignItems="center">
          <Image width={'20px'} src={Logo} />
          <div className={scss.text}>
            <Text color="text100" padding="0 xl" scale="xl" weight="bold">
              Neuro UI
            </Text>
          </div>
        </Flex>
        <Flex flexDirection="row" alignItems="center" justifyContent="flex-end">
          <Tabs id="navigation" hover margin="0 m 0 0">
            <TabsHeader>
              <Tab href="https://www.findnlink.com" index={0}>
                Findnlink
              </Tab>
              <Tab href="https://github.com/Findnlink/Neuro-UI" index={1}>
                GitHub
              </Tab>
              <Tab href="https://www.npmjs.com/package/@findnlink/neuro-ui'" index={2}>
                NPM
              </Tab>
              <Tab index={3}>
                <ThemeChanger />
              </Tab>
            </TabsHeader>
          </Tabs>
        </Flex>
        <Navigation padding="s 0 0 0" children={[]} type={'vertical'}></Navigation>
        <div>
          <div>
            <Routes>
              <Route path="/" element={'Home'} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/quickstart" element={<QuickStart />} />
              <Route path="/gettingstarted" element={<GettingStarted />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/errormessage" element={<ErrorMessageMDX />} />
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
              <Route path="/tabs" element={<TabsMDX />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/navigation" element={<NavigationMDX />} />
              <Route path="/layout" element={<LayoutMDX />} />
              <Route path="/footer" element={<FooterMDX />} />
              <Route path="/imagegallery" element={<ImageGalleryMDX />} />
            </Routes>
          </div>
        </div>
      </Layout>
    </StoreProvider>
  )
}
