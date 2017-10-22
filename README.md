# photo-comments
**photo-comments** is a simple application built using [React](https://facebook.github.io/react/). It is configured using [Webpack](https://webpack.github.io/docs/).

The purpose of this application is to demonstrate the ease with which a client app can use the [comment-on-it](https://www.npmjs.com/package/comment-on-it) component.

### Usage

*   ```npm install --save comment-on-it```  *[see it on npmjs](https://www.npmjs.com/package/comment-on-it)*
*   Use it in your component.
```
import { CommentOnIt } from 'comment-on-it'
:
:

    render() {
        return (
            <div>
                <img src='https://photos/photo1' alt='Photo 1'>
                <CommentOnIt
                    appId='52063950-79bc-4b59-b2a7-f7b4cd2430ca'
                    instanceId='Photo1'
                    header='Join the discussion :' />
            </div>
        );
    };

```
*   The component takes 3 props:
    *   ```appId```: This is unique to your site. Get an AppId by registering your credentials here ```<TDB>```. *For now, use your site url as an unique identifier.*
    *  ```instanceId```: This refers to the context of the Comments. In the example above, the comments are related to 'Photo1'.
    *  ```header```: This shows up as the HeaderText on the Comment component.
*   When the component is loaded, it gets the Comments posted for this AppId and InstanceId combination.
*   If any of the props change, the Comments are queried again and refreshed
*   The component remembers the logged in user, and attaches the username to every comment posted.
*   The user can logout to clear the username.

---
