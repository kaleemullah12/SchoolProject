using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolErp.Services
{
    public class StaffServices
    {
        InvictusSchoolEntities db = new InvictusSchoolEntities();
        public void AddStaff(Staff rec)
        {
            db.Staffs.Add(rec);
            db.SaveChanges();
        }


    }
}