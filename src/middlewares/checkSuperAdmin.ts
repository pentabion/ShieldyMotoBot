import { Context } from 'telegraf'

export function checkSuperAdmin(ctx: Context, next) {
  const arrOfAdmins = process.env.ADMIN.split(":").map(str => {
    return parseInt(str, 10);
  });

  console.log("Admins are: ", arrOfAdmins, "; Your ID: ", ctx.from.id);

  if ( arrOfAdmins.includes(ctx.from.id) ) {
    console.log("You've got root!");
    return next()
  }
  return
}
