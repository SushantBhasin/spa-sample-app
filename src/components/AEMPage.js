import React from 'react';
import Page from './Page';
import SampleContent from './SampleContent';

const AEMPage = () => (
    <main>
        <h2>Sample AEM + SPA</h2>
        <Page pagePath="/editorxpdevelopment/components/structure/page" />
        <SampleContent />
    </main>
);

export default AEMPage;

