import React, {Component} from 'react';
import WidgetAuthorTwo from "./widgets/WidgetAuthorTwo";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import WidgetPopularPost from "./widgets/WidgetPopularPost";

class UserSidebar extends Component {
    render() {
        return (
            <>
                <div className="sidebar section-bg">
                   
                    <WidgetAuthorTwo />
                    <WidgetTags />
                    <WidgetPopularPost />
                   
                </div>
            </>
        );
    }
}

export default UserSidebar;