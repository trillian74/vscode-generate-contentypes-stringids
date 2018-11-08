'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Guid } from "guid-typescript";
import * as clipboardy from 'clipboardy';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "contenttype-id-generator" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.SPOleB', async () => {
        // The code you place here will be executed every time your command is executed
        // 1) Getting the value
        const value = await vscode.window.showQuickPick(['Item', 'Event', 'Task', 'Document'],
            {
                placeHolder: 'Select the view to show when opening a window.'
            }
        );
        let fixedStringID: string = "";
        let temp: Guid = Guid.create();
        switch (value) {
            case "Item":
                fixedStringID = "0x0100";
                fixedStringID += temp.toString().toLocaleUpperCase().replace('-', '');
                break;
            case "Event":
                fixedStringID = "0x0102";
                fixedStringID += temp.toString().toLocaleUpperCase().replace('-', '');
                break;
            case "Task":
                fixedStringID = "0x0108";
                fixedStringID += temp.toString().toLocaleUpperCase().replace('-', '');
                break;
            case "Document":
                fixedStringID = "0x0101";
                fixedStringID += temp.toString().toLocaleUpperCase().replace('-', '');
                break;
            default:
                fixedStringID = "COMPUTER SAYS NO";
                vscode.window.showErrorMessage(`COMPUTER SAYS NO`);
                break;
        }
        clipboardy.writeSync(fixedStringID.replace(/-/g,''));
        // Display a message box to the user
        vscode.window.showInformationMessage(`Added ${fixedStringID.replace(/-/g,'')} to your clipboard`);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}