import { BLOG_LINK, GITHUB_LINK } from '@/constants';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

interface FooterProps {
  backgroundColor?: string;
}

const Footer: React.FC<FooterProps> = ({ backgroundColor }) => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'TurboAPI',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        // background: 'none',
        background: backgroundColor??'#a2d5f2',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'blog',
          title: "dhx_'blog",
          href: BLOG_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> dhx_ GitHub
            </>
          ),
          href: GITHUB_LINK,
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
