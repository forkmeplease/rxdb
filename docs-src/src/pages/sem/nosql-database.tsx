import Home from '..';

export default function Page() {
    return Home({
        sem: {
            id: 'gads',
            metaTitle: 'The NoSQL Database for JavaScript Applications',
            title: <>The easiest way to <b className="underline">store</b> and <b className="underline">sync</b> NoSQL Data</>,
            text: <>Store NoSQL data inside your App to build high performance realtime applications that sync data with the backend and even work when offline.</>
        }
    });
}
