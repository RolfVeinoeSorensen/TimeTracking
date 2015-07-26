using System.Collections.Generic;
using Orchard.Environment.Extensions.Models;
using Orchard.Security.Permissions;

namespace EM.TimeTracking {
    public class Permissions : IPermissionProvider {
        public static readonly Permission EditOwnTimeRegistrations = new Permission { Description = "Edit own timeregistrations", Name = "EditOwnTimeRegistrations" };
        public static readonly Permission EditOthersTimeRegistrations = new Permission { Description = "Edit others timeregistrations", Name = "EditOthersTimeRegistrations" };

        public virtual Feature Feature { get; set; }

        public IEnumerable<Permission> GetPermissions() {
            return new[] {
                EditOwnTimeRegistrations,
                EditOthersTimeRegistrations,
            };
        }

        public IEnumerable<PermissionStereotype> GetDefaultStereotypes() {
            return new[] {
                new PermissionStereotype {
                    Name = "Administrator",
                    Permissions = new[] {EditOthersTimeRegistrations, EditOwnTimeRegistrations}
                },
                //new PermissionStereotype {
                //    Name = "Anonymous",
                //    Permissions = new[] {EditOwnTimeRegistrations}
                //},
                new PermissionStereotype {
                    Name = "Authenticated",
                    Permissions = new[] {EditOwnTimeRegistrations}
                },
                new PermissionStereotype {
                    Name = "Editor",
                    Permissions = new[] {EditOwnTimeRegistrations}
                },
                new PermissionStereotype {
                    Name = "Moderator",
                    Permissions = new[] {EditOthersTimeRegistrations, EditOwnTimeRegistrations}
                },
                new PermissionStereotype {
                    Name = "Author",
                    Permissions = new[] {EditOwnTimeRegistrations}
                },
                new PermissionStereotype {
                    Name = "Contributor",
                    Permissions = new[] {EditOwnTimeRegistrations}
                },
            };
        }
    }
}
