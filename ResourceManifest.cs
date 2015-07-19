using Orchard.UI.Resources;

namespace TimeTracking
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(ResourceManifestBuilder builder)
        {
            var manifest = builder.Add();
            //manifest.DefineStyle("TimeTracking").SetUrl("");
        }
    }
}