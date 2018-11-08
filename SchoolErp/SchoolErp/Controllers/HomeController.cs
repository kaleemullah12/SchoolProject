using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult menu()
        {
            return View();
        }
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(Admin data)
        {
            InvictusSchoolEntities db = new InvictusSchoolEntities();
            var rec = db.Admins.Where(x => x.User_Name == data.User_Name && x.Password == data.Password).SingleOrDefault();
            Session["admin"] = rec;
            return RedirectToAction("Dashboard");
        }
        public ActionResult Dashboard()
        {
            if (Session["admin"] != null) { 
            return View();
            }
            return Content("This is the Admin Panel");
        }
    }
}