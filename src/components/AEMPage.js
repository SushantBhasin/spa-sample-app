import React from 'react';
import SampleContent from './SampleContent';
import { ResponsiveGrid } from '@adobe/aem-react-editable-components';

const AEMPage = () => (
    <main>
        <h2>Sample AEM + SPA</h2>
        <ResponsiveGrid pagePath="/root/responsivegrid" />
        <SampleContent />
    </main>
);

export default AEMPage;

