using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolErp.Services
{
    public class DesignationServices
    {
        InvictusSchoolEntities db = new InvictusSchoolEntities();
        public void AddDesignation(Designation rec)
        {
            db.Designations.Add(rec);
            db.SaveChanges();

        }
    }
}