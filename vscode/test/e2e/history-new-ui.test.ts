// import { expect } from '@playwright/test'

// import { disableNotifications, sidebarExplorer, sidebarSignin } from './common'
import { test } from './helpers'

// TODO(beatrix): re-enable flakey test

// test('checks if chat history shows up in sidebar', async ({ page, sidebar }) => {
//     // Turn off notification
//     await disableNotifications(page)

//     // Sign into Cody
//     await sidebarSignin(page, sidebar)

//     await page.getByRole('button', { name: 'cody-logo-heavy, Cody Settings' }).click()
//     await page
//         .getByRole('option', { name: 'New Chat UI, Experimental, Enable new chat panel UI' })
//         .locator('span')
//         .filter({ hasText: 'Experimental' })
//         .first()
//         .click()

//     // Open the File Explorer view from the sidebar
//     await sidebarExplorer(page).click()
//     // Open the index.html file from the tree view
//     await page.getByRole('treeitem', { name: 'index.html' }).locator('a').dblclick()

//     // Bring the cody sidebar to the foreground
//     await page.click('[aria-label="Cody"]')

//     // Open the new chat panel
//     await expect(
//         page.getByText('Chat alongside your code, attach files, add additional context, and try out diff')
//     ).toBeVisible()
//     await page.getByRole('button', { name: 'New Chat', exact: true }).click()

//     // Start a new chat and submit chat
//     await page.getByRole('tab', { name: 'New Chat' }).getByTitle('New Chat').locator('div').hover()
//     await page.keyboard.type('Hey')
//     await page.keyboard.press('Enter')

//     // Check if chat shows up in sidebar chat history tree view
//     await expect(
//         page.getByRole('treeitem', { name: 'Hey' }).locator('div').filter({ hasText: 'Hey' }).nth(3)
//     ).toBeVisible()
// })

test('disabled', async () => {})
