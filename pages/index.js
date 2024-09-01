// pages/index.js
import { useState } from 'react';

export default function Home() {
    const [application, setApplication] = useState('');
    const [version, setVersion] = useState('');
    const [jsonOutput, setJsonOutput] = useState('');

    const generateJSON = () => {
        const json = {
            definition: { id: "185" },
            templateParameters: {
                configuration: `[{'application':'${application}','version':'${version}'}]`,
                environment: "uat",
                customerList: "['reqlmttst']",
                aspcoreEnvType: "Staging",
                agent: "azure-hosted",
                flag: "true"
            },
            sourceBranch: "refs/tags/1.5.56"
        };
        setJsonOutput(JSON.stringify(json, null, 2));
    };

    return (
        <div>
            <h1>Generate JSON</h1>
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    Application:
                    <input type="text" value={application} onChange={e => setApplication(e.target.value)} required />
                </label>
                <br />
                <label>
                    Version:
                    <input type="text" value={version} onChange={e => setVersion(e.target.value)} required />
                </label>
                <br />
                <button type="button" onClick={generateJSON}>Generate JSON</button>
            </form>
            <h2>Generated JSON:</h2>
            <pre>{jsonOutput}</pre>
        </div>
    );
}
