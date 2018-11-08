using SchoolErp.Models;
using SchoolErp.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class StaffController : Controller
    {
        InvictusSchoolEntities db = new InvictusSchoolEntities();
        // GET: Staff
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult AddStaff()
        {
            var Des_list = db.Designations.ToList();
            var Qualif_list = db.Qualifications.ToList();
            ViewBag.Des = Des_list;
            ViewBag.Qualif = Qualif_list;
            return View();
        }
        [HttpPost]
        public JsonResult AddStaff(Staff rec)
        {
            StaffServices services = new StaffServices();
            services.AddStaff(rec);
            var Des_list = db.Designations.ToList();
            var Qualif_list = db.Qualifications.ToList();
            ViewBag.stud = Des_list;
            ViewBag.rel = Qualif_list;

            return Json(new { msg = "save" }, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult AddDesignation()
        {
            return View();
        }
        [HttpPost]
        public JsonResult AddDesignation(Designation rec)
        {
            DesignationServices services = new DesignationServices();
            services.AddDesignation(rec);
            return Json(new { msg = "save" }, JsonRequestBehavior.AllowGet);
        }
        public ActionResult AddSalary()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Staff_Attendence()
        {
            var stf_list = db.Staffs.ToList();
            ViewBag.st = stf_list;
            return View();
        }
        [HttpPost]
        public JsonResult Staff_Attendence(Staff_Attendence rec)
        {
            Staff_AttendenceServices services = new Staff_AttendenceServices();
            services.Staff_Attendence(rec);
            var stf_list = db.Staffs.ToList();
            ViewBag.st = stf_list;
            return Json(new { msg = "save" }, JsonRequestBehavior.AllowGet);
        }
    }
}