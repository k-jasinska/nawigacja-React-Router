import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import GroupsPage from '../pages/GroupsPage';
import MessagesPage from '../pages/MessagesPage';
import SettingsPage from '../pages/SettingsPage';

import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/news" exact component={NewsPage} />
            <Route path="/groups" exact component={GroupsPage} />
            <Route path="/message" exact component={MessagesPage} />
            <Route path="/settings" exact component={SettingsPage} />
            <Route component={ErrorPage} />
        </Switch>
    );
}

export default Page;