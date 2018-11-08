using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolErp.Services
{
    public class EnrolmentServices
    {

        InvictusSchoolEntities db = new InvictusSchoolEntities();
        public void Student_Enrolment(Student_Enrolment rec)
        {
            db.Student_Enrolments.Add(rec);
            db.SaveChanges();
        }
    }
}